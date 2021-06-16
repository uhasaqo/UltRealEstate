// This slideshow has been modified from code developed by W3Schools (Refsnes Data). All copyright belongs to W3Schools(Refsnes Data).

// This accordion/panel function allows the user to click the selected question they
// wish to view the answer for. 'onClick', the user will be shown the corresponding answer. Each time a question is clicked, all open panels will be shut, and only the corresponding answer will be shown.

// Identiying the element to be manipulated 'accordion'
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  // On click the panel (answer) will open beneath the question
  accordion[i].addEventListener("click", function() {
    // The variable a is the currently active question
    for (a = 0; a < accordion.length; a++) {
      var current = accordion[a];
      
      // This is where the code has been modified:
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

  for (i = 0; i < accordion.length; i++)
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
