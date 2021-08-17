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
    nav.setAttribute("style", "opacity: 1;");
    menuOpen = true;
  } else {
    menuBars.classList.toggle("change");
    nav.setAttribute("style", "opacity: 0;");
    menuOpen = false;
  }
}

console.log(window.outerWidth);
// Event Listener  ------------

// menu bar toggle
menuBars.addEventListener("click", toggleNav);

// set active class for Navigation
list.forEach((item) => item.addEventListener("click", activeLink));

// Loader for window
window.addEventListener("load", function () {
  spinerLoader.hidden = true;
});
