```javascript
// ==========================================
// Task 5: Email Validation Function
// ==========================================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// ==========================================
// Task 2: Check Email
// ==========================================

function checkEmail() {

    const email =
        document.getElementById("email").value.trim();

    const emailError =
        document.getElementById("emailError");

    if (email === "") {

        emailError.textContent =
            "Email is required.";

        return false;
    }

    if (!validateEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        return false;
    }

    emailError.textContent = "";

    return true;
}


// ==========================================
// Check Password
// ==========================================

function checkPassword() {

    const password =
        document.getElementById("password").value;

    const passwordError =
        document.getElementById("passwordError");

    if (password.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters.";

        return false;
    }

    passwordError.textContent = "";

    return true;
}


// ==========================================
// Check Confirm Password
// ==========================================

function checkConfirmPassword() {

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        return false;
    }

    if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        return false;
    }

    confirmPasswordError.textContent = "";

    return true;
}


// ==========================================
// Task 4: Show / Hide Password
// ==========================================

function togglePassword(inputId, eyeIcon) {

    const input =
        document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        eyeIcon.textContent = "🙈";

    } else {

        input.type = "password";

        eyeIcon.textContent = "👁️";
    }
}


// ==========================================
// Task 2 + Task 5: Form Submit
// ==========================================

document
    .getElementById("signupForm")
    .addEventListener("submit", function(event) {

        // Prevent page refresh
        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const usernameError =
            document.getElementById("usernameError");

        const successMessage =
            document.getElementById("successMessage");


        // Username Validation

        if (username === "") {

            usernameError.textContent =
                "Username is required.";

        } else {

            usernameError.textContent = "";
        }


        // Run all validations

        const emailValid = checkEmail();

        const passwordValid = checkPassword();

        const confirmPasswordValid =
            checkConfirmPassword();


        // Final Check

        if (
            username !== "" &&
            emailValid &&
            passwordValid &&
            confirmPasswordValid
        ) {

            successMessage.textContent =
                "🎉 Account created successfully!";

            // Console log entered data

            console.log({
                username: username,
                email:
                    document.getElementById("email").value,
                password:
                    document.getElementById("password").value
            });

        } else {

            successMessage.textContent = "";
        }

    });
```;
