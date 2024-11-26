const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

const updateSlider = () => {
  slider.style.transform = `translateX(-${index * 100}%)`;
};

prev.addEventListener('click', () => {
  index = index > 0 ? index - 1 : images.length - 1;
  updateSlider();
});

next.addEventListener('click', () => {
  index = index < images.length - 1 ? index + 1 : 0;
  updateSlider();
});
