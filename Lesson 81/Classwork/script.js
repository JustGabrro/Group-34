const square = document.getElementById('square');
let direction = 0;

function animateSquare() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const size = square.offsetWidth;

  if (direction === 0 && square.offsetLeft < viewportWidth - size) {
    square.style.left = `${square.offsetLeft + 2}px`;
  } else if (direction === 1 && square.offsetTop < viewportHeight - size) {
    square.style.top = `${square.offsetTop + 2}px`;
  } else if (direction === 2 && square.offsetLeft > 0) {
    square.style.left = `${square.offsetLeft - 2}px`;
  } else if (direction === 3 && square.offsetTop > 0) {
    square.style.top = `${square.offsetTop - 2}px`;
  }

  if (square.offsetLeft >= viewportWidth - size && direction === 0) direction = 1;
  else if (square.offsetTop >= viewportHeight - size && direction === 1) direction = 2;
  else if (square.offsetLeft <= 0 && direction === 2) direction = 3;
  else if (square.offsetTop <= 0 && direction === 3) direction = 0;

  requestAnimationFrame(animateSquare);
}

animateSquare();
