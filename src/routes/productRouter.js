const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const productsController = require('../controllers/productController');


/*** USAMOS EL MULTER ***/ 
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/products')
    },
    filename: (req,file,cb) =>{
        console.log(file);
        const nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
        console.log (nuevoNombre);
    }
})
const upload = multer ({storage})


//rutas de las vistas

//detalle de producto
router.get('/detalleproducto/:idModelo?', productsController.detalleProducto);

//crear Producto
router.get('/crearproducto', productsController.crearproducto);
router.post('/', upload.single('imgModelo'), productsController.create);


//editar Producto
router.get('/editarproducto/:idModelo?', productsController.editarproducto);
router.put('/:idModelo/editar', productsController.editar);


//inventario
router.get('/', productsController.products);




module.exports = router;
