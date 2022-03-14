const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const multer = require('multer');

const controlador ={

    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        res.render('detalleproducto', {"modelos": productosParseados[idModelo] })
    },
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },
    create: (req, res) => {
        let productosActuales = fs.readFileSync(productsFilePath, 'utf-8')
		productosActuales = JSON.parse(productosActuales)
		let newProduct = req.body;
		newProduct.image = req.file.filename;
		let ultimoIndice = productosActuales.length+1;
		newProduct.id = ultimoIndice;
		productosActuales.push(newProduct)
		let newProductoJSON = JSON.stringify(productosActuales)
		//const nuevaVariableJSON = JSON.stringify(newProduct)
		fs.writeFileSync(productsFilePath, newProductoJSON)
		//products.push(newProductoJSON);
        console.log(req.file);
        res.send('archivo subido correctamente')
		res.redirect('/products/crearproducto')
    },
    editarproducto: (req, res) => {
        res.render('editarproducto')
    },
    products: (req, res) => {
        res.render('products', {productosParseados});
    }
}

// exportacion del modulo
module.exports = controlador;