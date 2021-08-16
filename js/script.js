let spinerLoader = document.getElementById("loader"); // for Loader
let list = document.querySelectorAll(".list"); // for Navigation

// add active class in selected tab Navigation
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

// Event Listener  ------------

// set active class for Navigation
list.forEach((item) => item.addEventListener("click", activeLink));

// Loader for window
window.addEventListener("load", function () {
  spinerLoader.hidden = true;
});
