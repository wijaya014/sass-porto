console.log("Hello");
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navitems = document.querySelectorAll(".menu-nav__item");

let display = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!display) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navitems.forEach((item) => item.classList.add("open"));
    display = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navitems.forEach((item) => item.classList.remove("open"));
    display = false;
  }
}
