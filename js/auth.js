const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

/* TAB SWITCH */

loginTab.onclick = () => {
  showLogin();
};

signupTab.onclick = () => {
  showSignup();
};

function showLogin() {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  loginForm.classList.add("active");
  signupForm.classList.remove("active");
}

function showSignup() {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  signupForm.classList.add("active");
  loginForm.classList.remove("active");
}

/* HASH ROUTING */

window.onload = () => {
  if (window.location.hash === "#signup") {
    showSignup();
  } else {
    showLogin();
  }
};
