const express = require('express');
const path = require('path');

//llamada al controlador
const mainControlador = require("../controllers/mainController");

//definicion de rutas
const router = express.Router();

//rutas de las vistas

//vista index
router.get('/', mainControlador.index)

//vista carrito de compras
router.get('/carrito', mainControlador.carritoCompras)

//vista login
router.get('/login', mainControlador.login)

//vista login
router.get('/register', mainControlador.register)


//router.get ('*', mainControlador.pagerror);

//exportar el modulo
module.exports = router;
