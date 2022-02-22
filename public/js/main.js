const menu = document.querySelector('.menu');
const cruz = document.querySelector('.cruz');
const enlaces = document.querySelector('.enlaces-menu');

menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    cruz.classList.toggle('activado');
});

cruz.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    cruz.classList.toggle('activado');
})

