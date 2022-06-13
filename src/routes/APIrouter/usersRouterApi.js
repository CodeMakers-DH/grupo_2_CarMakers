const express = require('express');
const router = express.Router();

const controllerAPI = require('../../controllers/APIcontroller/usersControllerAPI');


router.get('/usuarios', controllerAPI.list);
router.get('/usuarios/:idUsuario?', controllerAPI.show);
/* 
router.post('/', upload.single('imgProducto'), validateProductEdit, controllerAPI.store);
router.delete('/:idModelo/eliminar', controllerAPI.delete);
router.get('/search', controllerAPI.search); 
*/

module.exports = router;