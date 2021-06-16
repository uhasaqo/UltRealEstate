// This slideshow has been modified from code developed by W3Schools
// The code was originally distributed under a Creative Commons license.
// Modification is permitted and encouraged.
// No attribution for the modified aspect of the code is required by the author.

// Setting the starting index of the slideshow as 1
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls of the slideshow
function plusSlides(n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n)
}
// Function that executes the slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Adjusting the selector dot to match the current slide
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}