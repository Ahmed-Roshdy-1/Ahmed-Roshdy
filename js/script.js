let spinerLoader = document.getElementById("loader"); // for Loader
let list = document.querySelectorAll(".list"); // for Navigation
let menuBars = document.getElementById("menu-bars"); // for Menu bars
let memuOpen = false;

// add active class in selected tab Navigation
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

// toggle Navigation
function toggleNav() {
  if (!memuOpen) {
    menuBars.classList.toggle("change");
  } else {
    menuBars.classList.toggle("change");
  }
}

$(document).ready(function () {
  $(".menu-bars").click(function () {
    $("nav").toggle("activeNav");
  });
});

// Event Listener  ------------

// menu bar toggle
menuBars.addEventListener("click", toggleNav);

// set active class for Navigation
list.forEach((item) => item.addEventListener("click", activeLink));

// Loader for window
window.addEventListener("load", function () {
  spinerLoader.hidden = true;
});
