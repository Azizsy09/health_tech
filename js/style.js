const button = document.getElementById('more-info');
const card = document.querySelector('.card');
const name = document.querySelector('.name');
const specialization = document.querySelector('.specialization');
const socialIcons = document.querySelector('.social-icons');

button.addEventListener('click', () => {
  card.classList.toggle('active');
  name.classList.toggle('active');
  specialization.classList.toggle('active');
  socialIcons.classList.toggle('active');
});
