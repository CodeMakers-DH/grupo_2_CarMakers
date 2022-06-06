/*
const express = require('express');
const router = express.Router();

const multer = require('multer');
const {check} = require('express-validator');
const path = require('path');

const controller = require('/controllers/mainController')

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/products')
    },
    filename: (req,file,cb) =>{
        const nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
    }
})
const upload = multer ({storage})

const validateProductEdit = [

    check('nombreProducto')
        .notEmpty().withMessage('Debes rellenar el nombre.').bail()
        .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres.'),
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

router.get('/', controller.list);
router.get('/detail/:idModelo?', controller.show);
router.post('/', upload.single('imgProducto'), validateProductEdit, controller.store);
router.delete('/:idModelo/eliminar', controller.delete);
router.get('/search', controller.search);

module.exports = router;

*/