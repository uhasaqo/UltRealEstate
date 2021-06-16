// This slideshow has been modified from code developed by W3Schools
// The code was originally distributed under a Creative Commons license.
// Modification is permitted and encouraged.
// No attribution for the modified aspect of the code is required by the author.

// Identiying the element to be manipulated 'accordion'
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // On click the panel (answer) will open beneath the question
  acc[i].addEventListener("click", function() {
    // The variable a is the currently active question
    for (a = 0; a < acc.length; a++) {
      var current = acc[a];
      // The current class is removed when another question is clicked.
      // A child has been created for each question the user clicks next.
      var child = current.nextElementSibling;
      if (child.style.display === "block") {
        current.classList.remove("active");
        child.style.display = "none";
      }

    }
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

  for (i = 0; i < acc.length; i++)
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
