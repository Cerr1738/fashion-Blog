// script.js
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slide2 = document.getElementsByClassName("mySlides2")
  let dots = document.getElementsByClassName("dot");
  let dots2 =document.getElementsByClassName("dot1")

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";




  if (n > slide2.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slide2.length }
  for (i = 0; i < slide2.length; i++) {
    slide2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide2[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  
}

function showSlides2(n){
  
}
