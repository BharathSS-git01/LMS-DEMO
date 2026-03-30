var AUTH_STORAGE_KEY = "lms_registered_users_v1";
var DEMO_EMAIL = "student@gmail.com";
var DEMO_PASSWORD = "pass1234";

async function loginUser() {
  var form = document.getElementById("loginForm");
  if (!form) return;

  var emailField = form.querySelector("input[type='email']");
  var passwordField = form.querySelector("input[type='password']");
  var email = String(emailField && emailField.value || "").trim().toLowerCase();
  var password = String(passwordField && passwordField.value || "");
  var authError = null;

  if (!email || !password) {
    alert("Enter both email and password.");
    return;
  }

  try {
    var remoteSession = await loginViaApi(email, password);
    if (remoteSession) {
      persistSession(remoteSession.user, remoteSession.token);
      redirectAfterLogin(remoteSession.user);
      return;
    }
  } catch (error) {
    authError = error;
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
  var nameField = document.getElementById("signupName");
  var emailField = document.getElementById("signupEmail");
  var passwordField = document.getElementById("signupPassword");
  var name = String(nameField && nameField.value || "").trim();
  var email = String(emailField && emailField.value || "").trim().toLowerCase();
  var password = String(passwordField && passwordField.value || "");
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
    var remoteSession = await registerViaApi(name, email, password);
    if (remoteSession) {
      persistSession(remoteSession.user, remoteSession.token);
      redirectAfterLogin(remoteSession.user);
      return;
    }
  } catch (error) {
    authError = error;
  }

  var users = loadLocalUsers();
  var alreadyExists = users.some(function (user) {
    return normalizeEmail(user.email) === email;
  });

  if (alreadyExists) {
    alert(authError ? authError.message : "An account with this email already exists.");
    return;
  }

  var newUser = createLocalStudentUser(name, email, password);
  users.push(newUser);
  saveLocalUsers(users);
  persistSession(newUser, "local-signup-session");
  redirectAfterLogin(newUser);
}

async function loginViaApi(email, password) {
  if (!hasApiConfig()) return null;

  var response = await fetch(buildApiUrl("/api/auth/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  var payload = await safeJson(response);

  if (!response.ok) {
    throw new Error(getApiErrorMessage(payload, "Login failed"));
  }

  return normalizeRemoteAuthSession(payload, email, "Login failed");
}

async function registerViaApi(name, email, password) {
  if (!hasApiConfig()) return null;

  var response = await fetch(buildApiUrl("/api/auth/register"), {
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

  var payload = await safeJson(response);

  if (!response.ok) {
    throw new Error(getApiErrorMessage(payload, "Registration failed"));
  }

  return normalizeRemoteAuthSession(payload, email, "Registration failed");
}

function authenticateLocalUser(email, password) {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return normalizeSessionUser({
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
    });
  }

  var localUser = loadLocalUsers().find(function (user) {
    return normalizeEmail(user.email) === email && user.password === password;
  });

  return localUser ? stripPassword(localUser) : null;
}

function createLocalStudentUser(name, email, password) {
  return {
    id: buildLocalStudentId(email),
    name: name,
    email: email,
    password: password,
    role: "student",
    phone: "",
    registerNo: buildRegisterNumber(email),
    department: "Student",
    institution: "Vidhya Vaaradhi LMS",
    semester: "Semester 1",
    joinedOn: new Date().toISOString().split("T")[0],
    image: "assets/TESTIMONIAL PROFILE.jpg"
  };
}

function persistSession(user, token) {
  var cleanUser = normalizeSessionUser(stripPassword(user));
  localStorage.removeItem("admin_session");
  localStorage.setItem("token", token || "");
  localStorage.setItem("currentUser", JSON.stringify(cleanUser));
  localStorage.setItem("user", JSON.stringify(cleanUser));
}

function redirectAfterLogin(user) {
  if (user && user.role === "admin") {
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

function normalizeSessionUser(user, fallbackEmail) {
  var sessionUser = Object.assign({}, user || {});
  var normalizedEmail = normalizeEmail(sessionUser.email || fallbackEmail || "");
  var fallbackId = normalizedEmail ? buildLocalStudentId(normalizedEmail) : "student-demo-user";

  return {
    id: sessionUser.id !== undefined && sessionUser.id !== null && sessionUser.id !== "" ? sessionUser.id : fallbackId,
    name: sessionUser.name || "Student",
    email: normalizedEmail,
    role: sessionUser.role || "student",
    phone: sessionUser.phone || "",
    registerNo: sessionUser.registerNo || buildRegisterNumber(normalizedEmail),
    department: sessionUser.department || "Student",
    institution: sessionUser.institution || "Vidhya Vaaradhi LMS",
    semester: sessionUser.semester || "Semester 1",
    joinedOn: sessionUser.joinedOn || new Date().toISOString().split("T")[0],
    image: sessionUser.image || "assets/TESTIMONIAL PROFILE.jpg"
  };
}

function normalizeRemoteAuthSession(payload, fallbackEmail, fallbackMessage) {
  var data = payload && payload.data ? payload.data : payload;
  var rawUser = data && data.user ? data.user : payload && payload.user ? payload.user : null;
  var token =
    (data && (data.accessToken || data.token || data.access_token)) ||
    (payload && (payload.accessToken || payload.token || payload.access_token)) ||
    "";

  if (!rawUser || !token) {
    throw new Error(getApiErrorMessage(payload, fallbackMessage));
  }

  return {
    user: normalizeSessionUser(rawUser, fallbackEmail),
    token: token
  };
}

function buildApiUrl(path) {
  if (window.LMS_API && typeof window.LMS_API.buildApiUrl === "function") {
    return window.LMS_API.buildApiUrl(path);
  }

  return path;
}

function hasApiConfig() {
  return !!(window.LMS_API && window.LMS_API.hasConfiguredApiBase);
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function buildLocalStudentId(email) {
  var normalized = normalizeEmail(email).replace(/[^a-z0-9]/gi, "");
  return "student-" + (normalized || Date.now());
}

function buildRegisterNumber(email) {
  var normalized = normalizeEmail(email).replace(/[^a-z0-9]/gi, "").toUpperCase();
  return "VV" + normalized.slice(-8).padStart(8, "0");
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}

function getApiErrorMessage(payload, fallbackMessage) {
  return (
    (payload && (payload.error || payload.message)) ||
    (payload && payload.data && (payload.data.error || payload.data.message)) ||
    fallbackMessage
  );
}
