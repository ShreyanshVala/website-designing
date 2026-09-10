```javascript
// =====================================
// SIGN UP FORM
// =====================================

const signupForm =
    document.getElementById("signupForm");

const formMessage =
    document.getElementById("formMessage");


signupForm.addEventListener("submit", function(event) {

    // Prevent page reload

    event.preventDefault();


    // Get form values

    const username =
        document.getElementById("username").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const terms =
        document.getElementById("terms").checked;


    // Basic validation

    if (username === "") {

        formMessage.textContent =
            "Please enter your username.";

        formMessage.style.color = "red";

        return;
    }


    if (email === "") {

        formMessage.textContent =
            "Please enter your email.";

        formMessage.style.color = "red";

        return;
    }


    if (password.length < 8) {

        formMessage.textContent =
            "Password must be at least 8 characters.";

        formMessage.style.color = "red";

        return;
    }


    if (!terms) {

        formMessage.textContent =
            "Please agree to the Terms & Conditions.";

        formMessage.style.color = "red";

        return;
    }


    // Success

    formMessage.textContent =
        "🎉 Account created successfully!";

    formMessage.style.color = "#1ed760";


    // Console output

    console.log({
        username: username,
        email: email,
        password: password,
        termsAccepted: terms
    });


    // Reset form

    signupForm.reset();

});
```;
