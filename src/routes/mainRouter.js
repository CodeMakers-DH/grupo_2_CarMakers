const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const {check} = require('express-validator');

//llamada al controlador
const mainControlador = require("../controllers/mainController");

//definicion de rutas
const router = express.Router();


const validateForm = [
    check('emailNL')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('El formato del email es incorrecto'),
];


//rutas de las vistas
router.get('/', mainControlador.index);
router.get('/sobre-nosotros', mainControlador.sobreNosotros);
router.get('/politica-cookies', mainControlador.politicaCookies);
router.get('/politica-privacidad', mainControlador.politicaPrivacidad);
router.get('/terminos', mainControlador.terminos);
router.post('/', validateForm, mainControlador.newsletter);
router.get('/carrito', mainControlador.carritoCompras);
router.get('/construccion', mainControlador.construccion);



/*
PRUEBA SESSION
router.get('/pruebaSession', function(req, res){
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
});
*/

//router.get ('*', mainControlador.pagerror);

//exportar el modulo
module.exports = router;
