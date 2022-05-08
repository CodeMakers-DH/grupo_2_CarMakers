const path = require('path');
const fs = require('fs');
//const productsFilePath = path.join(__dirname, '../data/productos.json');
//const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {validationResult} = require('express-validator');

//cargar db Emails
const db = require('../../database/models');
const res = require('express/lib/response');

//controladores de vitas
const controlador ={
    index: (req, res) => {
        db.Producto.findAll({limit: 5})
            .then(productos=> res.render('index', {"productos":productos}));
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    pagerror: (req, res) => { 
        res.render('error')
    },
    construccion: (req, res) => {
        res.render('construccion')
    },
    newsletter: (req, res) => {

    /* - que los errores esten guardados en un array
       - llevar los validate a middlewares separados
       - validar el checkbox en el backend */

    const resultValidation = validationResult(req)

    if(resultValidation.errors.length > 0){
        db.Producto.findAll({limit:5})
        .then(productos=> res.render('index', {productos,
                                              errors: resultValidation.mapped(), 
                                              oldData: req.body
                                            }));

                                            };

        db.Emails.findOne({
                where: {
                        email: req.body.emailNL
                        }

            }).then((resultado) => {

                if(resultado){
                    db.Producto.findAll({limit:5})
                    .then(productos=> res.render('index', {productos,
                        errors: { emailNL : { msg : 'Esta dirección ya se encuentra suscripta'} }, 
                        oldData: req.body
                        }));
                } else {
                    let newEmail = req.body.emailNL;

                    db.Emails.create({
                        email: newEmail
                    });

                    db.Producto.findAll({limit:5})
                    .then(productos=> res.render('index', {productos,
                        errors: { emailNL : { msg : '¡Gracias por suscribirse!'} }, 
                        }));
                }
            })
 }
}


// exportacion del modulo
module.exports = controlador;


