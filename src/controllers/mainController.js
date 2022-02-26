const path = require('path');

//controladores de vitas
const controlador ={
    index:(req, res) => {
        res.render('index')
    },
    detalleProducto: (req, res) => {
        res.render('detallaproducto')
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    login: (req, res) => {
        res.render('login')
    }
}

// exportacion del modulo
module.exports = controlador;