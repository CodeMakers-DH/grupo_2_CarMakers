const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// const multer = require('multer');

const controlador ={

    detalleUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        let usuarioFiltrado = usuarios.filter (usuario => usuario.id == idUsuario)
        res.send (usuarioFiltrado)
    },
    /* crearproducto: (req, res) => {
        res.render('crearproducto')
    },
    create: (req, res) => {
		let productosActuales = fs.readFileSync(productsFilePath, 'utf-8')
		productosActuales = JSON.parse(productosActuales)
		let newProduct = req.body;
		newProduct.imgModelo = req.file.filename;
		let ultimoIndice = productosActuales.length;
		newProduct.idModelo = ultimoIndice;
		productosActuales.push(newProduct)
		let newProductoJSON = JSON.stringify(productosActuales)
		fs.writeFileSync(productsFilePath, newProductoJSON)
		res.redirect('products')
    },
    editarproducto: (req, res) => {
        res.render('editarproducto')
    },
    products: (req, res) => {
        res.render('products', {productosParseados});
    } */
}

// exportacion del modulo
module.exports = controlador;