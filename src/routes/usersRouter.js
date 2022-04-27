const express = require('express');
const path = require('path');
const multer = require('multer'); 
const router = express.Router();
const {check} = require('express-validator');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../midddlewares/guestMiddleware');
const authMiddleware = require('../midddlewares/authMiddleware');


//Usamos el Multer
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/imgsPerfil')
    },
    filename: (req,file,cb) =>{
        //console.log(file);
        let nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
        //console.log (nuevoNombre);
    }
})
const upload = multer ({storage})

//rutas de las vistasgi

router.get('/', usersController.index);
router.get('/login', guestMiddleware, usersController.login)
router.get('/register', guestMiddleware, usersController.register)
router.get('/detalleUsuario/:idUsuario?', usersController.detalleUsuario);
router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

//login

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('No hemos podido encontra una cuenta con ese email.'),
    check('password')
        .notEmpty().withMessage('Debes rellenar la contraseña').bail()
        .isLength({min:5}).withMessage('La contraseña debe tener al menos 5 caracteres.')
];

router.post('/login', validateLogin, usersController.processLogin);

//crear usuario

const validateRegister = [
    check('nombres')
        .notEmpty().withMessage('Debes rellenar los nombres').bail(),
    check('apellidos')
        .notEmpty().withMessage('Debes rellenar los apellidos').bail(),
    check('email')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('No hemos podido encontra una cuenta con ese email.'),
    check('password')
        .notEmpty().withMessage('Debes rellenar la contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.'),
    check('imgPerfil')
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

router.get('/register', usersController.register);

router.post('/register', upload.single('imgPerfil'), validateRegister, usersController.processRegister);

//editar usuario
router.get('/editarUsuario/:idUsuario?', usersController.editarUsuario);
router.put('/:idUsuario/editar', usersController.actualizar)

//eliminar usuario
router.delete('/:idUsuario/eliminar', usersController.eliminarUsuario); 

module.exports = router;
