const slider = document.querySelector('.animated-slider');
const images = document.querySelectorAll('.animated-slider img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;
let autoSlideInterval;

const updateSlider = () => {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const autoSlide = () => {
  autoSlideInterval = setInterval(() => {
    index = (index + 1) % images.length;
    updateSlider();
  }, 3000);
};

prev.addEventListener('click', () => {
  index = index > 0 ? index - 1 : images.length - 1;
  updateSlider();
  clearInterval(autoSlideInterval);
  autoSlide();
});

next.addEventListener('click', () => {
  index = index < images.length - 1 ? index + 1 : 0;
  updateSlider();
  clearInterval(autoSlideInterval);
  autoSlide();
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    index = parseInt(e.target.dataset.index);
    updateSlider();
    clearInterval(autoSlideInterval);
    autoSlide();
  });
});

window.addEventListener('DOMContentLoaded', autoSlide);
