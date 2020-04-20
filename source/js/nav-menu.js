var button = document.querySelector(".header-nav__close");
var mainNav = document.querySelector(".page-header__main-nav");

button.classList.remove("header-nav__close--hidden");
button.classList.add("header-nav__menu");
mainNav.classList.add("page-header__main-nav--close");

button.addEventListener("click", function(evt) {
  button.classList.toggle("header-nav__menu");
  mainNav.classList.toggle("page-header__main-nav--close");
});
