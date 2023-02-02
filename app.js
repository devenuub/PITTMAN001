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