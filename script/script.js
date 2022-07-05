"use strict";

let rareButton = document.querySelector('.rare-button');
let modalDelivery = document.querySelector('.modal-delivery');
let closeButton = document.querySelector('.close-button');

rareButton.onclick = function () {
	modalDelivery.classList.add('opened'); 
};

closeButton.onclick = function () {
  modalDelivery.classList.remove('opened');
};
