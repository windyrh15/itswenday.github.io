// Ambil element navbar
const navbarMenu = document.querySelector(".navbar-menu");

// Jika Hamburger diklik
document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navbarMenu.classList.toggle("left-full");
    navbarMenu.classList.toggle("left-72");
    navbarMenu.classList.toggle("active");
    navbarMenu.classList.toggle("hidden-sidebar");
  });

// jika menekan apapun diluar hamburger
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
    navbarMenu.classList.remove("hidden-sidebar");
    navbarMenu.classList.replace("left-72", "left-full");
  }
});
