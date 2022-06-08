const express = require('express');
const router = express.Router();

const controllerAPI = require('../../controllers/APIcontroller/productControllerAPI');


router.get('/products', controllerAPI.list);
router.get('/products/:idModelo?', controllerAPI.show);
/* 
router.post('/', upload.single('imgProducto'), validateProductEdit, controllerAPI.store);
router.delete('/:idModelo/eliminar', controllerAPI.delete);
router.get('/search', controllerAPI.search); 
*/

module.exports = router;