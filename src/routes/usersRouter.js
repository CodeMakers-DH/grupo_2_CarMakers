const express = require('express');
const path = require('path');
// const multer = require('multer'); 
const router = express.Router();
const usersController = require('../controllers/usersController');



//rutas de las vistas
router.get('/', usersController.index);
//detalle de producto
router.get('/detalleUsuario/:idUsuario?', usersController.detalleUsuario);

//crear usuario
router.get('/registro', usersController.registro);
router.post('/', usersController.create);


//editar Producto
// router.get('/editarproducto', productsController.editarproducto);


//inventario
// router.get('/', productsController.products);




module.exports = router;
