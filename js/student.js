
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.onclick = () => {
  sidebar.classList.toggle("active");
};
