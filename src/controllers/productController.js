const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const multer = require('multer');
const { info } = require('console');

const controlador ={

    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        res.render('detalleproducto', {"modelos": productosParseados[idModelo] })
    },
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },
    create: (req, res) => {
		let newProduct = req.body;
		newProduct.imgModelo = req.file.filename;
		let ultimoIndice = productosParseados.length;
		newProduct.idModelo = ultimoIndice;
		productosParseados.push(newProduct)
		fs.writeFileSync(productsFilePath, newProductoJSON)
		res.redirect('products')
    },
    editarproducto: (req, res) => {
        let idProducto = req.params.idModelo;
        res.render('editarproducto' , {productToEdit : productosParseados.filter((producto) => producto.idModelo == idProducto)[0]});
    },
    editar: (req, res) => {
        let idModelo = req.params.idModelo;
        let infoForm = req.body;
        productosParseados.forEach(element => {
                    if(element.idModelo == idModelo){
                        element.descripcion = infoForm.descripcion;
                        element.nombreModelo = infoForm.nombreModelo;
                        element.imgModelo = infoForm.imgModelo;
                        element.precio = infoForm.precio;
                        element.autonomia = infoForm.autonomia;
                        element.velocidadMaxima = infoForm.velocidadMaxima;
                        element.tiempoDeCeroCien = infoForm.tiempoDeCeroCien;
                        element.deliveryEstimado = infoForm.deliveryEstimado;
                        element.ingreso = infoForm.ingreso;
                        }
                    });
                    fs.writeFileSync(productsFilePath,JSON.stringify(productosParseados))
                    res.redirect('/')
                    //res.send(productosParseados);
    },

    products: (req, res) => {
        res.render('products', {productosParseados});
    }
}

// exportacion del modulo
module.exports = controlador;