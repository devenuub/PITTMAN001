const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const carContainer = document.querySelector('.car-container');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  carContainer.style.left =  `${scrollY / 15}%`;
});

const mainBtn = document.getElementById('main__btn');
const formContainer = document.querySelector('.form-container');

mainBtn.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});