const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const {check} = require('express-validator');
const productsController = require('../controllers/productController');
const adminMiddleware = require('../midddlewares/adminMiddleware');


/*** USAMOS EL MULTER ***/ 

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/products')
    },
    filename: (req,file,cb) =>{
        //console.log(file);
        const nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
        //console.log (nuevoNombre);
    }
})
const upload = multer ({storage})

const validateProductCreate = [

    check('nombreProducto')
        .notEmpty().withMessage('Debes rellenar el nombre.').bail()
        .isLength({min:4}).withMessage('El nombre debe tener al menos 4 caracteres.'),
    check('descripcionProducto')
        .notEmpty().withMessage('Debes rellenar la descripción.').bail()
        .isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres.'),
    check('deliveryEstimado')
        .notEmpty().withMessage('Debes rellenar el delivery estimado.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('precioProducto')
        .isLength({min:5}).withMessage('Este campo debe tener al menos 5 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar el precio del producto.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('autonomia')
        .isLength({min:4}).withMessage('Este campo debe tener al menos 4 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar la autonomía.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('velocidadMaxima')
        .isLength({min:3}).withMessage('Este campo debe tener al menos 3 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar la velocidad máxima.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('tiempoDeCeroCien')
        .notEmpty().withMessage('Debes rellenar el tiempo de cero a cien.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('ingreso')
        .notEmpty().withMessage('Debes rellenar la fecha de ingreso.').bail()
        .isDate().withMessage('Este campo debe tener formato DD.MM.AA'),
    check('imgProducto')
        .custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
            if(!file){
                throw new Error('Por favor seleccione un archivo') 
            } else {
                let fileExtensions = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtensions)){
                    throw new Error('Por favor seleccione un archivo en formato JPG, JPEG, GIF o PNG.')
                }
            }
            return true;
        })

];

const validateProductEdit = [

    check('nombreProducto')
        .notEmpty().withMessage('Debes rellenar el nombre.').bail()
        .isLength({min:4}).withMessage('El nombre debe tener al menos 4 caracteres.'),
    check('descripcionProducto')
        .notEmpty().withMessage('Debes rellenar la descripción.').bail()
        .isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres.'),
    check('deliveryEstimado')
        .notEmpty().withMessage('Debes rellenar el delivery estimado.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('precioProducto')
        .isLength({min:5}).withMessage('Este campo debe tener al menos 5 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar el precio del producto.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('autonomia')
        .isLength({min:4}).withMessage('Este campo debe tener al menos 4 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar la autonomía.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('velocidadMaxima')
        .isLength({min:3}).withMessage('Este campo debe tener al menos 3 caracteres.').bail()
        .notEmpty().withMessage('Debes rellenar la velocidad máxima.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('tiempoDeCeroCien')
        .notEmpty().withMessage('Debes rellenar el tiempo de cero a cien.').bail()
        .isNumeric().withMessage('Este campo debe contener sólo números.'),
    check('ingreso')
        .notEmpty().withMessage('Debes rellenar la fecha de ingreso.').bail()
        .isDate().withMessage('Este campo debe tener formato DD.MM.AA'),
    check('imgProducto')
        .custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpeg', '.jpg', '.png', '.gif'];
            if(!file){
                return true;
            } else {
                let fileExtensions = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtensions)){
                    throw new Error('Por favor seleccione un archivo en formato JPG, JPEG, GIF o PNG.')
                }
            }
            return true;
        })

];



//rutas de las vistas

//detalle de producto
router.get('/detail/:idModelo?', productsController.detalleProducto); 

//crear Producto
router.get('/create', adminMiddleware, productsController.crearproducto);
router.post('/', upload.single('imgProducto'), validateProductCreate, productsController.create);


//editar Producto
router.get('/edit/:idModelo?', adminMiddleware, productsController.editarproducto);
router.put('/:idModelo/editar', upload.single('imgProducto'), validateProductEdit, productsController.editar);



//inventario
router.get('/', productsController.products);

//eliminar producto

router.delete('/:idModelo/eliminar', productsController.destroy);
 

module.exports = router;