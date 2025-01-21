// Input Collection
// It collects values from the form fields(name, address, email, password, subject) using document.getElementById().value.
// The agree checkbox's checked state is collected using .checked
function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;


    // Error Message Elements
    // These lines fetch the error message elements for each input field where validation errors will be displayed.
    const nameError = document.getElementById("name-error");

    const addressError = document.getElementById(
        "address-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const subjectError = document.getElementById(
        "subject-error"
    );
    const agreeError = document.getElementById(
        "agree-error"
    );

    // Clearing Previous Error Messages
    // Clears any previous error messages to avoid duplication during each validation attempt
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";
    // Validation Flag
    // A flag(isValid) is initialized as true. It will be set to false if any validation fails
    let isValid = true;
    // Validation Rules
    // Each input field is checked individually
    // Name Validation
    // Ensures the name is not empty and does not contain numbers(using regex /\d /)
    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }
    // Address Validation
    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }
    // Email Validation
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
    // Password Validation
    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    // Subject Validation
    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }
    // Final Return Statement
    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }
    // If all validations pass(isValid remains true), the form submission continues.
    // If any validation fails(isValid = false), the form submission is blocked.
    return isValid;
}
