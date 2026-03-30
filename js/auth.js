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

  if (!res.ok) {
    var errorData = await safeJson(res);
    throw new Error((errorData && errorData.error) || "Login failed");
  }

  return safeJson(res);
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

  if (!res.ok) {
    var errorData = await safeJson(res);
    throw new Error((errorData && errorData.error) || "Registration failed");
  }

  return safeJson(res);
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
  return !!(window.LMS_API && window.LMS_API.hasConfiguredApiBase);
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}
