function validateForm() {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    const repeatPassword = document.getElementById("repeatPassword").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";
    errorMessages.style.display = "none";

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email.match(/\.[a-z]{2,3}$/)) {
        errorMessages.innerHTML = "Invalid email format.";
        errorMessages.style.display = "block";
        return false;
    }

    // Validate passwords match
    if (password !== repeatPassword) {
        errorMessages.innerHTML = "Passwords do not match.";
        errorMessages.style.display = "block";
        return false;
    }

    // Validate age
    if (isNaN(age) || age < 18) {
        errorMessages.innerHTML = "You must be 18 or older.";
        errorMessages.style.display = "block";
        return false;
    }

    alert("Registration successful!");
    return true;
}
