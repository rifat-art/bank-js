

document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if (userEmail === "rifatrobi24@hotmail.com" && userPassword === "123456") {
        window.location.href = "bank.html";
    }
    else {
        alert("Login failed");
    }
})