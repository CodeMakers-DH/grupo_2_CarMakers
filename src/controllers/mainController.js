const path = require('path');
const fs = require('fs');
//const productsFilePath = path.join(__dirname, '../data/productos.json');
//const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {validationResult} = require('express-validator');

//cargar db Emails
const db = require('../../database/models')

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
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('index', {errors: resultValidation.mapped(), oldData: req.body})

        };

        let newsInDB = db.Emails.findOne({
            where: {
                email: req.body.emailNL
            }
        });

        if(newsInDB) {
            return res.render('index', 
                {   errors: {
                    email: {
                        msg : 'Esta dirección de correo electrónico ya se encuentra suscripta.'
                    }
                },

                oldData: req.body
            
                });
        }

        db.Emails.create({
            email: req.body.emailNL
        }) 

        res.redirect('/');
    }

}


// exportacion del modulo
module.exports = controlador;