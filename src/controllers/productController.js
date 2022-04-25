const path = require('path');
const fs = require('fs');
//const productsFilePath = path.join(__dirname, '../data/productos.json');//
//let productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../../database/models")
const multer = require('multer');
const { info } = require('console');

const controlador ={
// detalle del producto
    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        db.Producto.findByPk(idModelo)
        .then(productos=> res.render('detalleproducto', {"modelos": productos}) )
    },

// vista para crear producto
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },

//POST crear producto
    create: (req, res) => {
		let newProduct = req.body;
        db.Producto.create({
            descripcion: newProduct.descripcionProducto,
            nombreModelo: newProduct.nombreProducto,
            imgModelo: newProduct.imgProducto,
            deliveryEstimado:newProduct.deliveryEstimado,
            precio: newProduct.precioProducto,
            autonomia: newProduct.autonomia,
            velocidadMaxima: newProduct.velocidadMaxima,
            tiempoDeCeroCien: newProduct.tiempoDeCeroCien,
            ingreso: newProduct.ingreso
        })		
		res.redirect('/products')
    },
// vista editar producto
    editarproducto: (req, res) => {
        let idProducto = req.params.idModelo;
        db.Producto.findByPk(idProducto)
        .then(productos=> res.render('editarproducto', {"productToEdit": productos}) )
    },

    editar: (req, res) => {
        let idProducto = req.params.idModelo;
        let newProduct = req.body;
       // let editedProduct = ;
        db.Producto.update({
            descripcion: newProduct.descripcionProducto,
            nombreModelo: newProduct.nombreProducto,
            imgModelo: newProduct.imgProducto,
            deliveryEstimado:newProduct.deliveryEstimado,
            precio: newProduct.precioProducto,
            autonomia: newProduct.autonomia,
            velocidadMaxima: newProduct.velocidadMaxima,
            tiempoDeCeroCien: newProduct.tiempoDeCeroCien,
            ingreso: newProduct.ingreso
        },
            {where:{idModelo:idProducto}})
            .then(productos=> productos )
        res.redirect('/products');
    },

//inventario
    products: (req, res) => {
        db.Producto.findAll()
            .then(productos=> res.render('products', {productos}) )
    },
//eliminar producto o modelo
    destroy : (req, res) => {
		let idProducto = req.params.idModelo;
        db.Producto.destroy({
            where:{idModelo:idProducto}
        })
		res.redirect('/products')
	}
}

// exportacion del modulo
module.exports = controlador;