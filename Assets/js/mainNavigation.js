let id = (id) => document.getElementById(id);
let classes = (classes) => document.querySelector(classes);

let navToggle = id("nav-toggle"),
  navBar = id("nav-bar"),
  products = id("products"),
  resources = id("resources"),
  dropDownProducts = id("dropdown-products"),
  dropDownResources = id("dropdown-resources");

// Close and open nav bar for mobile
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("fa-times");
  navBar.classList.toggle("show-nav");
  navToggle.style.zIndex = "1000";
});

function showProductMenu(dropdown) {
  dropdown.classList.toggle("showdropdown");
}

function showResourcesMenu(dropdown) {
  dropdown.classList.toggle("hidedropdown");
}
