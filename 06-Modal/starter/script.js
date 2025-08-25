'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let btn of btnOpenModal) btn.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e['key'] === 'Escape' &&
    modal.classList.value.includes('hidden') == false
  ) {
    console.log(modal.classList.value.includes('hidden'));
    closeModal();
  }
});
