const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const user = require('../modelos/users');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
var usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controlador ={
    index: (req, res) => {
        res.send (usuarios)
    },
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let usersJSON = fs.readFileSync('usuarios.json', {errors: errors.erros})
            let users;
            if(usersJSON == ''){
                users=[];
            }else{
                users=JSON.parse(usersJSON);
            }
            for(let i = 0; i < users.length; i++){
                if(users[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
        if(usuarioALoguearse == undefined){
            return res.render('login', {errors: [{msg: "Los datos ingresados no son válidos."}]});
            }

        req.session.usuarioLogueado = usuarioALoguearse;
        
        } else {
            return res.render('login', {errors: errors.errors});
        }
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {

    },

    detalleUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        let usuarioFiltrado = usuarios.filter (usuario => usuario.id == idUsuario)
        res.send (usuarioFiltrado)
    },
    crear: (req, res) => {
		let nuevoUsuario = req.body;
        
        nuevoUsuario.id = usuarios[usuarios.length-1].id +1
		usuarios.push(nuevoUsuario)

		res.redirect('/users')
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
        res.redirect('/users')
    },

    eliminarUsuario:  (req, res) => {
		// Do the magic
		let idUsuario= req.params.idUsuario;
		usuarios = usuarios.filter((usuario)=> usuario.id != idUsuario);

    res.send(usuarios);
    }

}

// exportacion del modulo
module.exports = controlador;