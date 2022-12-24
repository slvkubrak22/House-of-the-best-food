'use strict'

const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.slider__btn-left');
const btnPrev = document.querySelector('.slider__btn-right')

let currentSlide = 0;
const slideLength = slide.length;

function moveSlide(slideNumber) {
  slide.forEach((slide, index) => (slide.style.transform = `translateX(${(index - slideNumber) * 100}%)`));
};

moveSlide(0);

function nextSlide() {
  if(currentSlide === slideLength - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlide(currentSlide);
};

function previousSlide() {
  if(currentSlide === 0) {
    currentSlide = slideLength - 1;
  } else {
    currentSlide--;
  }
  moveSlide(currentSlide);
};

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', previousSlide);

document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowLeft') previousSlide();
  if(e.key === 'ArrowRight') nextSlide();
});

