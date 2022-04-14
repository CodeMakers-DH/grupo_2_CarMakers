const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//controladores de vitas
const controlador ={
    index:(req, res) => {
        res.render('index', {productosParseados})
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    pagerror: (req, res) => { 
        res.render('error')
    },
}

// exportacion del modulo
module.exports = controlador;