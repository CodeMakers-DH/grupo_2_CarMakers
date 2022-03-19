const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controlador ={
    index: (req, res) => {
        res.send (usuarios)
    },

    detalleUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        let usuarioFiltrado = usuarios.filter (usuario => usuario.id == idUsuario)
        res.send (usuarioFiltrado)
    },
    
    registro: (req, res) => {
        res.render('register')
    },
    create: (req, res) => {
		let nuevoProducto = req.body;
        res.send(nuevoProducto);
        console.log(nuevoProducto);
    }, /*
    editarproducto: (req, res) => {
        res.render('editarproducto')
    },
    products: (req, res) => {
        res.render('products', {productosParseados});
    } */
}

// exportacion del modulo
module.exports = controlador;