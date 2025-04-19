// signup.js
import {
    isValidEmail,
    isStrongPassword,
    doPasswordsMatch,
    isValidUsername,
    isNotEmpty,
    isCompanyNameValid
} from './authValidation.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("signup");
    const passwordInput = document.getElementById("signup-password");
    const confirmPasswordInput = document.getElementById("signup-password-confirmation");
    const companyNameInput = document.querySelector("input[name='company_name']");
    const adminRadios = document.getElementsByName("is_company_admin");

    const errorFields = {
        username: document.getElementById("username-error"),
        email: document.getElementById("signup-error"),
        password: document.getElementById("password-error"),
        confirmPassword: document.getElementById("confirm-password-error"),
        company: document.getElementById("company-error")
    };

    function clearErrors() {
        for (let key in errorFields) {
            errorFields[key].textContent = "";
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();

        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const companyName = companyNameInput.value;
        const isAdmin = Array.from(adminRadios).find(radio => radio.checked)?.value === "True";

        let hasError = false;

        if (!isValidUsername(username)) {
            errorFields.username.textContent = "Username must be at least 3 characters with only letters, numbers, or _";
            hasError = true;
        }

        if (!isValidEmail(email)) {
            errorFields.email.textContent = "Enter a valid email address.";
            hasError = true;
        }

        if (!isStrongPassword(password)) {
            errorFields.password.textContent = "Password must include uppercase, lowercase, number, and special character.";
            hasError = true;
        }

        if (!doPasswordsMatch(password, confirmPassword)) {
            errorFields.confirmPassword.textContent = "Passwords do not match.";
            hasError = true;
        }

        if (companyNameWrapper.style.display !== "none" && !isNotEmpty(companyName)) {
            errorFields.company.textContent = "Company name is required for company admins.";
            hasError = true;
        }

        if (!hasError) {
            form.submit();
        }
    });
    const companyNameWrapper = document.getElementById("company-name-wrapper");

    adminRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked && radio.value === "True") {
                companyNameWrapper.style.display = "block";
            } else if (radio.checked && radio.value === "False") {
                companyNameWrapper.style.display = "none";
                companyNameInput.value = "";
                errorFields.company.textContent = ""; 
            }
        });
});

const toggleButtons = document.querySelectorAll(".password-wrapper button");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.closest(".password-wrapper").querySelector("input");

        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    });
});

usernameInput.addEventListener("blur", validateUsername);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
companyNameInput.addEventListener("blur", validateCompanyName);

function validateUsername() {
    errorFields.username.textContent = isValidUsername(usernameInput.value)
        ? ""
        : "Username must be at least 3 characters with only letters, numbers, or _";
}

function validateEmail() {
    errorFields.email.textContent = isValidEmail(emailInput.value)
        ? ""
        : "Enter a valid email address.";
}

function validatePassword() {
    errorFields.password.textContent = isStrongPassword(passwordInput.value)
        ? ""
        : "Password must include uppercase, lowercase, number, and special character.";
}

function validateConfirmPassword() {
    errorFields.confirmPassword.textContent = doPasswordsMatch(passwordInput.value, confirmPasswordInput.value)
        ? ""
        : "Passwords do not match.";
}

function validateCompanyName() {
    if (companyNameWrapper.style.display !== "none") {
        errorFields.company.textContent = isNotEmpty(companyNameInput.value)
            ? ""
            : "Company name is required for company admins.";
    } else {
        errorFields.company.textContent = "";
    }
}
});