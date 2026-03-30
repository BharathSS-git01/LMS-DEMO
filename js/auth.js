var AUTH_STORAGE_KEY = "lms_registered_users_v1";
var DEMO_EMAIL = "student@gmail.com";
var DEMO_PASSWORD = "pass1234";

async function loginUser() {
  var email = document.querySelector("#loginForm input[type='email']").value.trim().toLowerCase();
  var password = document.querySelector("#loginForm input[type='password']").value;
  var authError = null;

  if (!email || !password) {
    alert("Enter both email and password.");
    return;
  }

  try {
    var remote = await loginViaApi(email, password);
    if (remote) {
      persistSession(remote.user, remote.token);
      redirectAfterLogin(remote.user);
      return;
    }
  } catch (error) {
    authError = error;
  }

  if (!canUseLocalAuthFallback()) {
    alert(authError ? authError.message : "Login failed.");
    return;
  }

  var localUser = authenticateLocalUser(email, password);
  if (!localUser) {
    alert(authError ? authError.message : "Invalid email or password.");
    return;
  }

  persistSession(localUser, "demo-local-session");
  redirectAfterLogin(localUser);
}

async function registerUser() {
  var name = document.querySelector("#signupName").value.trim();
  var email = document.querySelector("#signupEmail").value.trim().toLowerCase();
  var password = document.querySelector("#signupPassword").value;
  var authError = null;

  if (!name || !email || !password) {
    alert("Fill in all signup fields.");
    return;
  }

  if (email === DEMO_EMAIL) {
    alert("This email is reserved for the demo student. Please use another email.");
    return;
  }

  try {
    var remote = await registerViaApi(name, email, password);
    if (remote) {
      persistSession(remote.user, remote.token);
      redirectAfterLogin(remote.user);
      return;
    }
  } catch (error) {
    authError = error;
  }

  if (!canUseLocalAuthFallback()) {
    alert(authError ? authError.message : "Registration failed.");
    return;
  }

  var users = loadLocalUsers();
  var alreadyExists = users.some(function (user) {
    return String(user.email || "").toLowerCase() === email;
  });

  if (alreadyExists) {
    alert("An account with this email already exists.");
    return;
  }

  var newUser = {
    id: "local-" + Date.now(),
    name: name,
    email: email,
    password: password,
    role: "student",
    phone: "",
    registerNo: "VV" + String(Date.now()).slice(-8),
    department: "Student",
    institution: "Vidhya Vaaradhi LMS",
    semester: "Semester 1",
    joinedOn: new Date().toISOString().split("T")[0],
    image: "assets/TESTIMONIAL PROFILE.jpg"
  };

  users.push(newUser);
  saveLocalUsers(users);
  persistSession(stripPassword(newUser), "local-signup-session");
  window.location.href = "student.html";
}

async function loginViaApi(email, password) {
  ensureApiConfig();

  var res = await fetch(buildApiUrl("/api/auth/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  var payload = await safeJson(res);

  if (!res.ok) {
    throw new Error(getApiErrorMessage(payload, "Login failed"));
  }

  return normalizeAuthResponse(payload, "Login failed");
}

async function registerViaApi(name, email, password) {
  ensureApiConfig();

  var res = await fetch(buildApiUrl("/api/auth/register"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });

  var payload = await safeJson(res);

  if (!res.ok) {
    throw new Error(getApiErrorMessage(payload, "Registration failed"));
  }

  return normalizeAuthResponse(payload, "Registration failed");
}

function authenticateLocalUser(email, password) {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return {
      id: 101,
      name: "Bharath A",
      email: DEMO_EMAIL,
      role: "student",
      phone: "+91 98765 43210",
      registerNo: "21VVCS1012",
      department: "CSE",
      institution: "Vidhya Vaaradhi Institute of Technology",
      semester: "Semester 6",
      joinedOn: "2025-08-12",
      image: "assets/TESTIMONIAL PROFILE.jpg"
    };
  }

  var localUser = loadLocalUsers().find(function (user) {
    return String(user.email || "").toLowerCase() === email && user.password === password;
  });

  return localUser ? stripPassword(localUser) : null;
}

function persistSession(user, token) {
  var cleanUser = stripPassword(user);
  localStorage.removeItem("admin_session");
  localStorage.setItem("token", token || "");
  localStorage.setItem("currentUser", JSON.stringify(cleanUser));
  localStorage.setItem("user", JSON.stringify(cleanUser));
}

function canUseLocalAuthFallback() {
  return true;
}

function redirectAfterLogin(user) {
  if (user.role === "admin") {
    window.location.href = "admin/dashboard.html";
    return;
  }

  window.location.href = "student.html";
}

function loadLocalUsers() {
  try {
    var users = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");
    return Array.isArray(users) ? users : [];
  } catch (error) {
    return [];
  }
}

function saveLocalUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

function stripPassword(user) {
  if (!user) return null;
  var cleanUser = {};
  Object.keys(user).forEach(function (key) {
    if (key !== "password") {
      cleanUser[key] = user[key];
    }
  });
  return cleanUser;
}

function buildApiUrl(path) {
  if (window.LMS_API && typeof window.LMS_API.buildApiUrl === "function") {
    return window.LMS_API.buildApiUrl(path);
  }

  return path;
}

function ensureApiConfig() {
  if (!window.LMS_API || !window.LMS_API.hasConfiguredApiBase) {
    throw new Error("Frontend API base URL is not configured.");
  }
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}

function normalizeAuthResponse(payload, fallbackMessage) {
  var data = payload && payload.data ? payload.data : payload;
  var user = data && data.user ? data.user : null;
  var token =
    (data && (data.token || data.accessToken || data.access_token)) ||
    (payload && (payload.token || payload.accessToken || payload.access_token)) ||
    "";

  if (!user || !token) {
    throw new Error(getApiErrorMessage(payload, fallbackMessage));
  }

  return {
    user: user,
    token: token
  };
}

function getApiErrorMessage(payload, fallbackMessage) {
  return (
    (payload && (payload.error || payload.message)) ||
    (payload && payload.data && (payload.data.error || payload.data.message)) ||
    fallbackMessage
  );
}
