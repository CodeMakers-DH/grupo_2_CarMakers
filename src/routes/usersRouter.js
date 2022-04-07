const express = require('express');
const path = require('path');
const multer = require('multer'); 
const router = express.Router();
const usersController = require('../controllers/usersController');

//Usamos el Multer
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb (null, 'public/imgs/imgsPerfil')
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
router.get('/', usersController.index);
//detalle de usuario
router.get('/detalleUsuario/:idUsuario?', usersController.detalleUsuario);

//crear usuario
router.get('/registro', usersController.registro);
router.post('/', upload.single('imgPerfil'), (req, res, next) => {
    const file = req.file;
    if(!file){
        const error = new Error('Por favor seleccione un archivo')
        error.htttpStatusCode = 400;
        return next(error);
    } else if(path.extname(file.originalname) != ".jpg" && path.extname(file.originalname) != ".jpeg" && path.extname(file.originalname) != ".png"){
        const error = new Error('Por favor seleccione un archivo de formato JPG, JPEG o PNG.');
        error.htttpStatusCode = 400;
        return next(error)
    }
    next();
    }, usersController.crear);

//editar usuario
router.get('/editarUsuario/:idUsuario?', usersController.editarUsuario);
router.put('/:idUsuario/editar', usersController.actualizar)

//eliminar usuario
router.delete('/:idUsuario/eliminar', usersController.eliminarUsuario); 

module.exports = router;
