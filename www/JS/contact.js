// ------------------------------Contact.JS Script------------------------------
// Date created: 10/06/2021
// Author: James Cotterell © 2021 (CC Attribution-NoDerivs)
//------------------------------------------------------------------------------
// This function will validate user input on a contact form.

// First it will print to the console that the script is running.

// Then the script will validate user inputs (first name, surname, phone, email, 
// comment box message) against regular expression patterns, using a defined test.

// Validation is conditional on the <validPatternName>.test(<ID>.value) format //
// matching the regular expression ('if' the condition is met then 'else if' etc).

// If an invalid field is detected, a JS popup will appear prompting the user of ./// the issue. 

// If all information is validated, a dialog box will prompt the user
// to either submit or cancel their enquiry (and return to the form with their
// original data intact).
// ------------------------------------------------------------------------------

function newValidateForm() {

    // Printing to the inspect console that the form validation function has loaded
    console.log("Form validation started");

    // Defining the form that is being validated according to its class ID
    const form1 = document.getElementById("myForm");

    // Input validation regular expressions for each input value, stored as constant variables (i.e. they don't change for each user, unless the programmer alters the regular expression):
    const validPatternfName = /^[a-zA-Z]+$/;
    const validPatternsName = /^[a-zA-Z ]+$/;
    const validPatternPhone = /^(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})+$/;
    const validPatternEmail = /(?:[a-zA-Z0-9+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    // This regular expression will prevent against XSS, SQL injection, CSRF attacks, by restricting what characters can be entered into the comment box
    const validPatterncommentBox = /^[a-zA-Z0-9., -]+$/;

    // The variables storing each form input value
    var fName = form1.fName;
    var sName = form1.sName;
    var Phone = form1.Phone;
    var Email = form1.Email;
    var commentBox = form1.commentBox;

    // The pattern checks for JS validation of each input field
    var checkfName = validPatternfName.test(fName.value);
    var checksName = validPatternsName.test(sName.value);
    var checkPhone = validPatternPhone.test(Phone.value);
    var checkEmail = validPatternEmail.test(Email.value);
    var checkcommentBox = validPatterncommentBox.test(commentBox.value);

    // The conditions that must be met for each input field
    // Here we are checking for if the value is not valid, and displaying an alert if invalid (this aleart pop up text can be changed - within the brackets)
    // If valid (returns true), the validation will move onto the next input value.

    // Email validation condition - checking IF NOT fName regular expression
    if (!checkfName) {
        alert("First name is invalid");
        return false;
    }

    //Surname validation condition - checking IF NOT
    else if (!checksName) {
        alert("Surname is invalid");
        return false;
    }

    // Phone validation condition - checking IF NOT
    else if (!checkPhone) {
        alert("Phone is invalid");
        return false;
    }

    // Email validation condition - checking IF NOT
    else if (!checkEmail) {
        alert("Email is invalid");
        return false;
    }

    // Comment box validation condition - checking IF NOT
    else if (!checkcommentBox) {
        alert("Please only use letters, numbers, commas and fullstops in the comment box. Thanks!");
        return false;
    }

    // If all validation conditions are met, a confirmation popup is displayed to the user, showing the information they are about to submit, and asking them to click 'OK' or 'cancel and return to the form.
    else if (checkfName, checksName, checkPhone, checkEmail, checkcommentBox) {
        confirm("Thanks for your enquiry! Click 'OK' to submit the following information:" + "\n" + "\n" + "First name: " + fName.value + "\n" + "Surname: " + sName.value + "\n" + "Phone: " + Phone.value + "\n" + "Email: " + Email.value + "\n" + "Message: " + commentBox.value);
        return true;
    }

}