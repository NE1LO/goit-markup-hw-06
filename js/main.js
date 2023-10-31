// open-burger-menu
document.getElementById('btn-mobile-menu-open').onclick = function () {
  document.getElementById('block-mobile-menu').classList.add('is-open');
};

document.getElementById('btn-close-menu').onclick = function () {
  document.getElementById('block-mobile-menu').classList.remove('is-open');
};

// open-modal-window
const openWindow = document.getElementById('btn-open-modal');
const closeWindow = document.getElementById('btn-close-modal');
const modalWindow = document.getElementById('modal-window');

function openModal() {
  modalWindow.classList.add('is-open-modal');
}

function closeModal() {
  modalWindow.classList.remove('is-open-modal');
}

openWindow.addEventListener('click', openModal);
closeWindow.addEventListener('click', closeModal);
