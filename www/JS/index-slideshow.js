// This slideshow has been modified from code developed by W3Schools (Refsnes Data). All
// copyright belongs to W3Schools(Refsnes Data). Initial code was issued under a CC 
// Attribution-NonCommercial license. The modification of this code has been done for 
// research purposes only.

// This code generates an image slideshow the user can view. If the client wishes to 
// add new images, this should be done in the relevant divs in the index.html page.
//
// The slideshow has a previous and next button, as well as selector dots that move 
// between 'active' classes (i.e. the default state when the page loads (i.e. the first image) or when they have been selected by the user by clicking through the slideshow).

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