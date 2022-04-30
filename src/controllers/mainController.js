const path = require('path');
const fs = require('fs');
//const productsFilePath = path.join(__dirname, '../data/productos.json');
//const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../../database/models")


//controladores de vitas
const controlador ={
    index:(req, res) => {
        db.Producto.findAll()
            .then(productos=> res.render('index', {"productosParseados":productos}) )
        //res.render('index', {productosParseados})
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    pagerror: (req, res) => { 
        res.render('error')
    },
    construccion: (req, res) => {
        res.render('construccion')
    }
}

// exportacion del modulo
module.exports = controlador;