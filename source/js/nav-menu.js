var button = document.querySelector(".header-nav__close");
var mainNav = document.querySelector(".page-header__main-nav");

button.classList.add("header-nav__menu");
mainNav.classList.add("visually-hidden");

button.addEventListener("click", function(evt) {
  button.classList.toggle("header-nav__menu");
  mainNav.classList.toggle("visually-hidden");
});

