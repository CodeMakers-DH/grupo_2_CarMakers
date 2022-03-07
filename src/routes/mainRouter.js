const express = require('express');
const path = require('path');

//llamada al controlador
const controlador = require("../controllers/mainController");

//definicion de rutas
const router = express.Router();

//rutas de las vistas

//vista index
router.get('/', controlador.index)

//vista detalle de producto
router.get('/detalleproducto/:idModelo?', controlador.detalleProducto)

//vista carrito de compras
router.get('/carrito', controlador.carritoCompras)

//vista login
router.get('/login', controlador.login)

//vista login
router.get('/register', controlador.register)

//vista crear Producto
router.get('/crearproducto', controlador.crearproducto)

//vista crear Producto
router.get('/editarproducto', controlador.editarproducto)


//exportar el modulo
module.exports = router;
