const navIcon = document.querySelector(".burger_menu_icon i");
console.log(navIcon + " is this");
const navBar = document.querySelector(".nav-menu__links");
console.log(navBar + "--sss  is clicked");
function toggleNav() {
  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-xmark");
  navBar.classList.toggle("active");
  console.log("it was clicked");
}

navIcon.addEventListener("click", function () {
  console.log("function is working");
  toggleNav();
});
