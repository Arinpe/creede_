document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform form validation
    if (!validateForm(username, email, password, confirmPassword)) {
        return;
    }

    // Simulate asynchronous form submission to a server (replace with actual AJAX request)
    simulateFormSubmission(username, email, password);
});

document.getElementById("password").addEventListener("input", function() {
    var password = document.getElementById("password").value;
    updatePasswordStrength(password);
});

function validateForm(username, email, password, confirmPassword) {
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("error-message").innerText = "All fields are required!";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("error-message").innerText = "Passwords do not match!";
        return false;
    }

    document.getElementById("error-message").innerText = "";
    return true;
}

function updatePasswordStrength(password) {
    var strength = getPasswordStrength(password);
    var strengthIndicator = document.getElementById("password-strength");

    strengthIndicator.className = "strength-" + strength;
    strengthIndicator.textContent = "Password Strength: " + strength.toUpperCase();
}

function getPasswordStrength(password) {
    if (password.length < 8) {
        return "weak";
    } else if (password.length < 12) {
        return "medium";
    } else {
        return "strong";
    }
}

function simulateFormSubmission(username, email, password) {
    // Simulate sending data to a server (in a real application, this would be an AJAX request)
    console.log("Simulating form submission to server...");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
}
