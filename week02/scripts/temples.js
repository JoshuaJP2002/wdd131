const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  navigation.classList.toggle('open');
});

// Footer dynamic info
const yearSpan = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;