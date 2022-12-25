'use strict'

//slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.slider__btn-left');
const btnPrev = document.querySelector('.slider__btn-right')

let currentSlide = 0;
const slideLength = slides.length;

function moveSlide(slideNumber) {
  slides.forEach((slide, index) => (slide.style.transform = `translateX(${(index - slideNumber) * 100}%)`));
};

moveSlide(0);

function nextSlide() {
  if(currentSlide === slideLength - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlide(currentSlide);
  activeDot(currentSlide);
};

function previousSlide() {
  if(currentSlide === 0) {
    currentSlide = slideLength - 1;
  } else {
    currentSlide--;
  }
  moveSlide(currentSlide);
  activeDot(currentSlide);
};

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', previousSlide);

document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowLeft') previousSlide();
  if(e.key === 'ArrowRight') nextSlide();
});

//slider's dots
const dotsContainer = document.querySelector('.dots');

function createDots() {
  slides.forEach((_, index) => dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`));
};
createDots();

function activeDot(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots-active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots-active');
};
activeDot(0);

dotsContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    moveSlide(e.target.dataset.slide);
    activeDot(e.target.dataset.slide);
  }
});


// tabs
const tabsContainer = document.querySelector('.personnel__tabs-container');
const tabs = document.querySelectorAll('.personnel__tab');
const tabContent = document.querySelectorAll('.personnel__content');

tabsContainer.addEventListener('click', function(e) {
  const clickedTab = e.target.closest('.personnel__tab');
  // console.log(clickedTab);
  if(!clickedTab) return;
  // Active tab button
  tabs.forEach(tab => tab.classList.remove('personnel__content-active'));
  clickedTab.classList.add('personnel__content-active');
  // Active tab content
  tabContent.forEach(content => content.classList.add('hidden'));
  document.querySelector(`.personnel__content--${clickedTab.dataset.tab}`).classList.remove('hidden');
});

// Smooth scrolling

const linksContainer = document.querySelector('.header__nav__list');
linksContainer.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
  if(e.target.classList.contains('header__nav__links')) {
    const hrefCurrent = e.target.getAttribute('href');
    document.querySelector(hrefCurrent).scrollIntoView({
      behavior: 'smooth'
    });
  }
});







