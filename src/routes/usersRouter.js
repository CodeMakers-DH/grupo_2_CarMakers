const express = require('express');
const path = require('path');
const multer = require('multer'); 
const router = express.Router();
const {check} = require('express-validator');
const db = require('../../database/models')
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../midddlewares/guestMiddleware');
const authMiddleware = require('../midddlewares/authMiddleware');
const adminMiddleware = require('../midddlewares/adminMiddleware');


//Usamos el Multer
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/imgsPerfil')
    },
    filename: (req,file,cb) =>{
        let nuevoNombre = 'nombre_imagen' + Date.now() + path.extname(file.originalname);
        cb (null, nuevoNombre);
    }
})
const upload = multer ({storage})

//rutas de las vistasgi

router.get('/', adminMiddleware, usersController.index);
router.get('/login', guestMiddleware, usersController.login)

//router.get('/register', usersController.register);
router.get('/register', guestMiddleware, usersController.register)

//router.get('/detalleUsuario/:idUsuario?', usersController.detalleUsuario);
router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

//login

const validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('Ingrese un email de formato válido.'),
    check('password')
        .notEmpty().withMessage('Debes rellenar la contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.')
];

router.post('/login', validateLogin, usersController.processLogin);

//crear usuario

const validateRegister = [
    check('nombres')
        .notEmpty().withMessage('Debes rellenar los nombres').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres.').bail(),
    check('apellidos')
        .notEmpty().withMessage('Debes rellenar los apellidos').bail()
        .isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres.').bail(),
    check('email')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('Ingresa un email de formato válido.').bail()
        .custom(async(value, {req}) => {

            const usuario = await db.Usuario.findOne({
                where: {
                    email: req.body.email
            }});
            
            if(usuario){
                throw new Error('Esta dirección de correo electrónico ya se encuentra registrada.')

            }

        }),
    check('password')
        .notEmpty().withMessage('Debes rellenar la contraseña').bail()
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres.').bail()
        .custom((value, {req}) => {
            let pass = req.body.password;

            if(pass.match(/[0-9]/) && pass.match(/[A-Z]/) && pass.match(/[a-z]/) && pass.match(/[.,:;-_!"§$%&/()=?`+@]/)){
                return true;
            } 
            else{
            throw new Error('La contraseña debe tener al menos un número, una mayúscula, minúscula y un caracter especial.')
        }
        }),
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
        }),
];


router.post('/register', upload.single('imgPerfil'), validateRegister, usersController.processRegister);

//editar usuario
router.get('/editarUsuario/:idUsuario?', adminMiddleware, usersController.editarUsuario);
router.put('/:idUsuario/editar', usersController.actualizar)

//eliminar usuario
router.delete('/:idUsuario/eliminar', usersController.eliminarUsuario); 

module.exports = router;
