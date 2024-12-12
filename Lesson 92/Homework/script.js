const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  // Reset classes
  passwordInput.classList.remove("low", "medium", "strong");

  if (strength === "Low") {
    passwordInput.classList.add("low");
    strengthText.textContent = "Strength: Low";
  } else if (strength === "Medium") {
    passwordInput.classList.add("medium");
    strengthText.textContent = "Strength: Medium";
  } else if (strength === "Strong") {
    passwordInput.classList.add("strong");
    strengthText.textContent = "Strength: Strong";
  } else {
    strengthText.textContent = "Strength: None";
  }
});

function getPasswordStrength(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length >= 10 && hasUpperCase && hasNumber && hasSpecialChar) {
    return "Strong";
  } else if (password.length >= 8 && (hasUpperCase || hasNumber)) {
    return "Medium";
  } else if (password.length >= 6) {
    return "Low";
  } else {
    return "None";
  }
}
