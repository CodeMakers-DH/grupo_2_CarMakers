const menu = document.querySelector('.menu');
const enlaces = document.querySelector('.enlaces-menu');

menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

