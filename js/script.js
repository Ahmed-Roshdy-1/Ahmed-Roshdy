let spinerLoader = document.getElementById("loader"); // for Loader
let list = document.querySelectorAll(".list"); // for Navigation
let menuBars = document.getElementById("menu-bars"); // for Menu bars
let menuOpen = false;
let nav = document.getElementById("navigation");

// add active class in selected tab Navigation
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

// toggle Navigation
function toggleNav() {
  if (!menuOpen) {
    menuBars.classList.toggle("change");
    nav.classList.replace("navigation", "changeNav");

    menuOpen = true;
  } else {
    menuBars.classList.toggle("change");
    nav.classList.replace("changeNav", "navigation");

    menuOpen = false;
  }
}
// Activate scrollspy to add active class to navbar items on scroll
$("#menu").onePageNav({
  currentClass: "active",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing",
});

// Event Listener  -----------

// menu bar toggle
menuBars.addEventListener("click", toggleNav);

// set active class for Navigation
list.forEach((item) => item.addEventListener("click", activeLink));

// Loader for window
window.addEventListener("load", function () {
  spinerLoader.hidden = true;
});
