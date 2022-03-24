const express = require('express');
const path = require('path');
// const multer = require('multer'); 
const router = express.Router();
const usersController = require('../controllers/usersController');



//rutas de las vistas
router.get('/', usersController.index);
//detalle de usuario
router.get('/detalleUsuario/:idUsuario?', usersController.detalleUsuario);

//crear usuario
router.get('/registro', usersController.registro);
router.post('/', usersController.crear);

//editar usuario
router.get('/editarUsuario/:idUsuario?', usersController.editarUsuario);
router.put('/:idUsuario/editar', usersController.actualizar)

//eliminar usuario
router.delete('/:idUsuario/eliminar', usersController.eliminarUsuario); 

module.exports = router;
