
// ===============================
// LMS LANDING PAGE SCROLL SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // 1️⃣ NAVBAR AUTO HIDE ON SCROLL
  // ===============================

  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // Scrolling DOWN → Hide navbar
      navbar.style.top = "-100px";
    } else {
      // Scrolling UP → Show navbar
      navbar.style.top = "0";
    }

    lastScroll = currentScroll;
  });


  // ===============================
  // 2️⃣ SCROLL REVEAL ANIMATION
  // ===============================

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

});