var window_size = window.matchMedia('(max-width: 768px)');
var buttonItWas = document.querySelector(".example__link-it-was");
var buttonHasBecome = document.querySelector(".example__link-has-become");
var imageHasBefore = document.querySelector(".example__cat-image--before");
var imageHasAfter = document.querySelector(".example__cat-image--after");

if(window.matchMedia('(max-width: 768px)').matches){

  buttonItWas.addEventListener("click", function(evt) {
    imageHasBefore.classList.remove("example__cat-image--close");
    imageHasAfter.classList.add("example__cat-image--close");
  });

  buttonHasBecome.addEventListener("click", function(evt) {
    imageHasAfter.classList.remove("example__cat-image--close");
    imageHasBefore.classList.add("example__cat-image--close");
  });
}
