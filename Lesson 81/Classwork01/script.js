const circle = document.getElementById('circle');
const button = document.getElementById('jumpButton');

button.addEventListener('click', () => {
  circle.style.transition = 'transform 0.5s ease';
  circle.style.transform = 'translateY(-150px)';

  setTimeout(() => {
    circle.style.transform = 'translateY(0)';
  }, 380);
});
