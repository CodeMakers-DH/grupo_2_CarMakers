const path = require('path');
const fs = require('fs');
//const productsFilePath = path.join(__dirname, '../data/productos.json');//
//let productosParseados = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {validationResult} = require('express-validator');
const db = require("../../database/models")
//const multer = require('multer');
//const { info } = require('console');

const controlador ={
// detalle del producto
    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        db.Producto.findByPk(idModelo)
        .then(productos=> 
            {
                if (productos){res.render('detalleproducto', {"modelos": productos}) }
                else{res.status(404).render('error')}
                
            })

          
    },

// vista para crear producto
    crearproducto: (req, res) => {
        res.render('crearproducto')
    },

//POST crear producto
    create: (req, res) => {
		let newProduct = req.body;
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('crearproducto', {errors: resultValidation.mapped(), oldData: req.body})
        } else {
            db.Producto.create({
                descripcion: newProduct.descripcionProducto,
                nombreModelo: newProduct.nombreProducto,
                imgProducto:req.file.filename,// colocar el nuevo nombre que viene del multer
                deliveryEstimado:newProduct.deliveryEstimado,
                precio: newProduct.precioProducto,
                autonomia: newProduct.autonomia,
                velocidadMaxima: newProduct.velocidadMaxima,
                tiempoDeCeroCien: newProduct.tiempoDeCeroCien,
                ingreso: newProduct.ingreso
            });
    
            res.redirect('/products')
        }
        
    },
// vista editar producto
    editarproducto: (req, res) => {
        let idProducto = req.params.idModelo;
        db.Producto.findByPk(idProducto)
        .then(productos=> res.render('editarproducto', {"productToEdit": productos}) )
    },
//edición de producto
    editar: (req, res) => {

        const resultValidation = validationResult(req);
        let idProducto = req.params.idModelo;
        let newProduct = req.body;
        
        if(resultValidation.errors.length > 0) {

            db.Producto.findByPk(idProducto)
            .then(productos => res.render('editarproducto', {"productToEdit": productos, oldData: req.body, errors: resultValidation.mapped()}))
        } else {

        // let editedProduct = ;
        db.Producto.update({
            descripcion: newProduct.descripcionProducto,
            nombreModelo: newProduct.nombreProducto,
            imgProducto: req.file.filename,//idem controlador create
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
        //console.log(req.file)	;

        }
    },

//inventario
    products: (req, res) => {
        let keyword = req.query.keyword;
        console.log('holaa'+keyword)
        db.Producto.findAll()
            .then(productos=> res.render('products', {"products":productos,
                                                        'keyword': keyword}) )
            //console.log(productos)
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