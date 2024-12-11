document.getElementById("registrationForm").addEventListener("input", function (event) {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const age = document.getElementById("age");
  
    validateFullName(fullName);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);
    validateAge(age);
  });
  
  function validateFullName(input) {
    const errorMessage = document.getElementById("fullNameError");
    const regex = /^[A-Za-z]{3,}$/;
    if (!regex.test(input.value)) {
      input.classList.add("invalid");
      input.classList.remove("valid");
      errorMessage.style.display = "block";
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  }
  
  function validateEmail(input) {
    const errorMessage = document.getElementById("emailError");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(input.value)) {
      input.classList.add("invalid");
      input.classList.remove("valid");
      errorMessage.style.display = "block";
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  }
  
  function validatePassword(input) {
    const errorMessage = document.getElementById("passwordError");
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(input.value)) {
      input.classList.add("invalid");
      input.classList.remove("valid");
      errorMessage.style.display = "block";
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  }
  
  function validateConfirmPassword(password, confirmPassword) {
    const errorMessage = document.getElementById("confirmPasswordError");
    if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add("invalid");
      confirmPassword.classList.remove("valid");
      errorMessage.style.display = "block";
    } else {
      confirmPassword.classList.add("valid");
      confirmPassword.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  }
  
  function validateAge(input) {
    const errorMessage = document.getElementById("ageError");
    if (input.value < 18 || input.value === "") {
      input.classList.add("invalid");
      input.classList.remove("valid");
      errorMessage.style.display = "block";
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  }
  