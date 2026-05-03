// Form element DOM references
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const generalEnquiry = document.getElementById("general-enquiry");
const supportRequest = document.getElementById("support-request");
const textArea = document.getElementById("message-input-field");
const consentCheckBox = document.getElementById("consent-checkbox");

// Error message DOM references
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const validEmailError = document.getElementById("valid-email-error");
const emailError = document.getElementById("email-error");
const queryError = document.getElementById("query-error");
const messageError = document.getElementById("textarea-error");
const consentError = document.getElementById("consent-error");

const inputStringList = [firstName, lastName, email, textArea];

const emailRegex = /\S+@\S+\.\S+/;

const button = document.getElementById("submit-btn");
button.addEventListener("click", submitHandler);

function submitHandler(event) {
    let booleanStringList = true;
    let booleanRadioCheck = true;
    let booleanConsentCheck = true;
    let booleanEmailValidation = true;

    // Check for empty input field
    inputStringList.forEach((item) => {
        if (item.value === "") {
            booleanStringList = false;

            if (item === firstName) {
                firstName.style.border = "solid 1px red";

                firstNameError.removeAttribute("hidden");
                firstNameError.removeAttribute("aria-hidden");
            } else if (item === lastName) {
                lastName.style.border = "solid 1px red";

                lastNameError.removeAttribute("hidden");
                lastNameError.removeAttribute("aria-hidden");
            } else if (item === email) {
                emailError.removeAttribute("hidden");
                emailError.removeAttribute("aria-hidden");
            } else if (item === textArea) {
                textArea.style.border = "solid 1px red";

                messageError.removeAttribute("hidden");
                messageError.removeAttribute("aria-hidden");
            }
        } else {
            if (item === firstName) {
                firstName.style.border = "solid 1px black";

                firstNameError.setAttribute("hidden", true);
                firstNameError.setAttribute("aria-hidden", true);
            } else if (item === lastName) {
                lastName.style.border = "solid 1px black";
                
                lastNameError.setAttribute("hidden", true);
                lastNameError.setAttribute("aria-hidden", true);
            } else if (item === email) {
                emailError.setAttribute("hidden", true);
                emailError.setAttribute("aria-hidden", true);
            } else if (item === textArea) {
                textArea.style.border = "solid 1px black";

                messageError.setAttribute("hidden", true);
                messageError.setAttribute("aria-hidden", true);
            }
        }
    });

    // Check if all input fields are filled
    booleanStringList = inputStringList.every((item) => item.value !== "");

    // Prevent form submission if any input fields are empty
    if (booleanStringList === false) {
        event.preventDefault();
    }

    // Check for unchecked radio buttons 
    if (generalEnquiry.checked === false && supportRequest.checked === false) {
        booleanRadioCheck = false;

        queryError.removeAttribute("hidden");
        queryError.removeAttribute("aria-hidden");
    } else {
        queryError.setAttribute("hidden", true);
        queryError.setAttribute("aria-hidden", true);
    }

    // Prevent form submission if none of the radio buttons are checked
    if (booleanRadioCheck === false) {
        event.preventDefault();
    }

    // Check for unchecked checkboxes
    if (consentCheckBox.checked === false) {
        booleanConsentCheck = false;

        consentError.removeAttribute("hidden");
        consentError.removeAttribute("aria-hidden");
    } else {
        consentError.setAttribute("hidden", true);
        consentError.setAttribute("aria-hidden", true);   
    }

    // Prevent form submission if consent checkbox is unchecked
    if (booleanConsentCheck === false) {
        event.preventDefault();
    }

    // Email validation
    if (emailRegex.test(email.value) === false && email.value !== "") {
        booleanEmailValidation = false

        validEmailError.removeAttribute("hidden");
        validEmailError.removeAttribute("aria-hidden");
    } else {
        validEmailError.setAttribute("hidden", true);
        validEmailError.setAttribute("aria-hidden", true);
    }

    // Prevent form submission if email is invalid
    if (booleanEmailValidation === false) {
        event.preventDefault();
    }

    // Handle error-state email input field styling
    if (email.value === "" || booleanEmailValidation === false) {
        email.style.border = "solid 1px red";
    } else {
        email.style.border = "solid 1px black";
    }
}