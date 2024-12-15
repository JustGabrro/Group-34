const body = document.body;
const toggleButton = document.getElementById('toggle-animation');
const speedControl = document.getElementById('speed-control');

let isAnimating = true;

toggleButton.addEventListener('click', () => {
  if (isAnimating) {
    body.style.animationPlayState = 'paused';
    toggleButton.textContent = 'Resume';
  } else {
    body.style.animationPlayState = 'running';
    toggleButton.textContent = 'Pause';
  }
  isAnimating = !isAnimating;
});

speedControl.addEventListener('input', (e) => {
  const speed = e.target.value;
  body.style.animationDuration = `${11 - speed}s`;
});
