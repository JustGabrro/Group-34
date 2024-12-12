// Task 1
const charInput = document.getElementById('charInput');
const charCount = document.getElementById('charCount');

charInput.addEventListener('input', () => {
  charCount.textContent = `${charInput.value.length} characters`;
});

// Task 2
const alphaInput = document.getElementById('alphaInput');
const errorMsg = document.getElementById('errorMsg');

alphaInput.addEventListener('input', () => {
  const isValid = /^[a-zA-Z]*$/.test(alphaInput.value);
  if (isValid) {
    errorMsg.classList.add('hidden');
  } else {
    errorMsg.classList.remove('hidden');
  }
});
