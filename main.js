const openButton = document.getElementById("open-menu");
const closeButton = document.getElementById("close-menu");
const headerNav = document.getElementById("header-nav");

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

function openMenu() {
  console.log("open");
  openButton.style.display = "none";
  headerNav.classList.add("header__nav--display");
}
function closeMenu() {
  console.log("close");
  headerNav.classList.remove("header__nav--display");
  openButton.style.display = "block";
}
