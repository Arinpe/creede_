document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform simple authentication (replace with actual authentication logic)
    if (username === "example" && password === "password") {
        document.getElementById("error-message").innerText = "Sign-in successful!";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});
