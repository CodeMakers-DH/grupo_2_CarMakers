const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//controladores de vitas
const controlador ={
    index:(req, res) => {
        res.render('index', {productosParseados})
    },
    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        res.render('detalleproducto', {"modelos": productosParseados[idModelo] })
    
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },
    editarproducto: (req, res) => {
        res.render('editarproducto')
    },
    pagerror: (req, res) => { 
        res.render('error')
    },
}

// exportacion del modulo
module.exports = controlador;