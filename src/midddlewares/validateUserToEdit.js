const {check} = require('express-validator');

const validateUserToEdit = [
    check('nombres')
        .notEmpty().withMessage('Debes rellenar los nombres').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres.').bail(),
    check('apellidos')
        .notEmpty().withMessage('Debes rellenar los apellidos').bail()
        .isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres.').bail(),
    check('email')
        .notEmpty().withMessage('Debes rellenar el email').bail()
        .isEmail().withMessage('Ingresa un email de formato válido.').bail(),
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
        })
];

module.exports = validateUserToEdit;