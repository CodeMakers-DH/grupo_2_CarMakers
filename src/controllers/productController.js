const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador ={

    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        res.render('detalleproducto', {"modelos": productosParseados[idModelo] })
    },
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },
    editarproducto: (req, res) => {
        res.render('editarproducto')
    },
}

// exportacion del modulo
module.exports = controlador;