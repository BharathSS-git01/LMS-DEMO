document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.getElementById("navToggle");
  const navOverlay = document.getElementById("navOverlay");
  const navMobileShell = document.getElementById("navMobileShell");
  const mobileNavLinks = document.querySelectorAll(".nav-center .nav-item, .nav-right a");
  let lastScroll = 0;

  function closeMobileNav() {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", document.body.classList.contains("nav-open") ? "true" : "false");
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileNav);
  }

  mobileNavLinks.forEach((item) => {
    item.addEventListener("click", closeMobileNav);
  });

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (document.body.classList.contains("nav-open")) {
        return;
      }

      navbar.style.top = currentScroll > lastScroll ? "-100px" : "0";
      lastScroll = currentScroll;
    });
  }

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
  revealOnScroll();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNav();
    }
  });

  if (navMobileShell) {
    navMobileShell.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

});
