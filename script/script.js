"use strict";

// модальное окно

let rareButton = document.querySelector('.rare-button');
let modalDelivery = document.querySelector('.modal-delivery');
let closeButton = document.querySelector('.close-button');

rareButton.onclick = function () {
	modalDelivery.classList.add('opened');
};

closeButton.onclick = function () {
  modalDelivery.classList.remove('opened');
};


// слайдер главной страницы

let btnNext = document.querySelector(".slider-next");
let btnPrev = document.querySelector(".slider-prev");
let slides = document.querySelectorAll(".img");
let i = 0;

btnPrev.onclick = function () {
  ++i;
  if (i >= slides.length) {
      console.log(slides.length);
      slides[i-1].classList.remove("slider-block");
      i = 0;
      slides[i].classList.add("slider-block");
  } else {
      slides[i-1].classList.remove("slider-block");
      slides[i].classList.add("slider-block");
  }
};

btnNext.onclick = function () {
  ++i;
  if (i >= slides.length) {
      console.log(slides.length);
      slides[i-1].classList.remove("slider-block");
      i = 0;
      slides[i].classList.add("slider-block");
  } else {
      slides[i-1].classList.remove("slider-block");
      slides[i].classList.add("slider-block");
  }
};

