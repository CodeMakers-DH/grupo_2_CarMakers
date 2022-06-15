const colores = document.getElementById('pinturaColor');
const plateado = document.getElementById('plateado');
const grisOscuro = document.getElementById('gris-oscuro');
const azul = document.getElementById('azul');
const negro = document.getElementById('negro');
const rojo = document.getElementById('rojo');
const ruedaDer = document.getElementById('ruedaDer');
const ruedaIzq = document.getElementById('ruedaIzq')
const nombreRueda = document.getElementById('nombreRueda');

ruedaDer.addEventListener('click', () => {
    nombreRueda.innerHTML = 'Royal';
    ruedaDer.style.outline = 'rgb(80, 80, 80) solid 1px'
    ruedaIzq.style.outline = '0px'
});

ruedaIzq.addEventListener('click', () => {
    nombreRueda.innerHTML = 'Kaiser';
    ruedaIzq.style.outline = 'rgb(80, 80, 80) solid 1px'
    ruedaDer.style.outline = '0px'
})


plateado.addEventListener('click', () => {
    colores.innerHTML = 'Plateado'
    plateado.style.outline = 'rgb(80, 80, 80) solid 1px'
    grisOscuro.style.outline = '0px'
    azul.style.outline = '0px'
    negro.style.outline = '0px'
    rojo.style.outline = '0px'
});

grisOscuro.addEventListener('click', () => {
    colores.innerHTML = 'Ceniza'
    grisOscuro.style.outline = 'rgb(80, 80, 80) solid 1px'
    plateado.style.outline = '0px'
    azul.style.outline = '0px'
    negro.style.outline = '0px'
    rojo.style.outline = '0px'
});

azul.addEventListener('click', () => {
    colores.innerHTML = 'Azul'
    azul.style.outline = 'rgb(80, 80, 80) solid 1px'
    grisOscuro.style.outline = '0px'
    plateado.style.outline = '0px'
    negro.style.outline = '0px'
    rojo.style.outline = '0px'
});

negro.addEventListener('click', () => {
    colores.innerHTML = 'Negro'
    negro.style.outline = 'rgb(80, 80, 80) solid 1px'
    grisOscuro.style.outline = '0px'
    azul.style.outline = '0px'
    plateado.style.outline = '0px'
    rojo.style.outline = '0px'
});

rojo.addEventListener('click', () => {
    colores.innerHTML = 'Rojo'
    rojo.style.outline = 'rgb(80, 80, 80) solid 1px'
    grisOscuro.style.outline = '0px'
    azul.style.outline = '0px'
    negro.style.outline = '0px'
    plateado.style.outline = '0px'
});

window.addEventListener('load', function(){
        colores.innerHTML = 'Azul'
        azul.style.outline = 'rgb(80, 80, 80) solid 1px'
        nombreRueda.innerHTML = 'Royal';
        ruedaDer.style.outline = 'rgb(80, 80, 80) solid 1px'
});
