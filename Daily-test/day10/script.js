function checkPassword() {
    var password = document.getElementById("password").value;
    var resultDiv = document.getElementById("result");

    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialCharRegex = /[!@#$]/;

    var hasUppercase = uppercaseRegex.test(password);
    var hasLowercase = lowercaseRegex.test(password);
    var hasNumber = numberRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);

    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
        resultDiv.textContent = "Your password is Strong.";
        resultDiv.style.color = "green";
        updateProgressColor('Strong');
    } else if (password.length >= 4 && (hasUppercase || hasLowercase) && (hasNumber || hasSpecialChar)) {
        resultDiv.textContent = "Your password is Medium.";
        resultDiv.style.color = "orange";
        updateProgressColor('Medium');
    } else {
        resultDiv.textContent = "Your password is Weak.";
        resultDiv.style.color = "red";
        updateProgressColor('Weak');
    }
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.querySelector("button");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Show";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Hide";
    }
}

function updateProgressColor(strength) {
    var weakProgress = document.getElementById("weak");
    var mediumProgress = document.getElementById("medium");
    var strongProgress = document.getElementById("strong");

    weakProgress.style.backgroundColor = "#e0e0e0";
    mediumProgress.style.backgroundColor = "#e0e0e0";
    strongProgress.style.backgroundColor = "#e0e0e0";

    if (strength === 'Weak') {
        weakProgress.style.backgroundColor = "red";
    } else if (strength === 'Medium') {
        mediumProgress.style.backgroundColor = "orange";
        weakProgress.style.backgroundColor = "red";
    } else if (strength === 'Strong') {
        strongProgress.style.backgroundColor = "green";
        mediumProgress.style.backgroundColor = "orange";
        weakProgress.style.backgroundColor = "red";
    }
}


var passwordStrength = '';
updateProgressColor(passwordStrength);