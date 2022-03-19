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
    
    crear: (req, res) => {
		let nuevoUsuario = req.body;
        res.send(nuevoUsuario);
        console.log(req.body);
    }, 
    
    editarUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        res.render('editarUsuario',{usuarioToEdit :usuarios.filter((usuario)=> usuario.id == idUsuario)[0] } )
    },
    
    actualizar: (req, res)=>{
        let idUsuario = req.params.idUsuario;
        let infoForm = req.body;
        usuarios.forEach(element => {
            if(element.id == idUsuario){
                element.nombres = infoForm.nombres;
                element.apellidos = infoForm.apellidos;
                element.correoElectronico = infoForm.correoElectronico;
                element.password = infoForm.password;
            }
        });
        res.send(usuarios.filter((usuario)=> usuario.id == idUsuario)[0])
        //res.redirect('/users')  
    }

}

// exportacion del modulo
module.exports = controlador;