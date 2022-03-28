const menu = document.querySelector('.boton-menu');
const cruz = document.querySelector('.cruz');
const enlaces = document.querySelector('.enlaces-menu');

const blur = document.querySelector('.container-blur');
const blurDos = document.querySelector('#filter');

menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    cruz.classList.toggle('activado');
    blur.classList.toggle('activado');
});

cruz.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    cruz.classList.toggle('activado');
    blurDos.classList.toggle('activado');
})


