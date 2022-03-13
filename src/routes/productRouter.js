const express = require('express');
const path = require('path');

const productsController = require('../controllers/productController');

const router = express.Router();


//rutas de las vistas

//vista detalle de producto
router.get('/detalleproducto/:idModelo?', productsController.detalleProducto);

//vista crear Producto
router.get('/crearproducto', productsController.crearproducto);

//vista editar Producto
router.get('/editarproducto', productsController.editarproducto);





module.exports = router;
