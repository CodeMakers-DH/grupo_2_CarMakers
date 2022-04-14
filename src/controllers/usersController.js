const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const user = require('../modelos/users');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
var usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
let bcrypt = require('bcrypt');


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
            let usersJSON = fs.readFileSync(usersFilePath, {errors: errors.errors})
            let users;
            let usuarioALoguearse;
            if(usersJSON == ''){
                users=[];
            }else{
                users=JSON.parse(usersJSON);
            }
            for(let i = 0; i < users.length; i++){
                if(users[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        usuarioALoguearse = users[i];
                        return res.send('Te logueaste: ' + usuarioALoguearse.nombres + ' ' + usuarioALoguearse.apellidos );
                    }
                }
            }
        if(usuarioALoguearse == undefined){
            return res.render('login', {errors: [{msg: "Los datos ingresados no son válidos."}]});
            }
            
            // aca estaria bueno que tire error especificando si esta mal el mail o la password

        req.session.usuarioLogueado = usuarioALoguearse;

        if(req.body.rememberMe != undefined){
            res.cookie('rememberMe', usuarioALoguearse.email, { maxAge: 200000});
        }
        
        } else {
            return res.render('login', {errors: errors.errors});
        }
    },
    profile: (req, res) => {
        res.render('profile', {usuario: usuarios});
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        let nuevoUsuario = {
            id : usuarios[usuarios.length-1].id +1,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            imgPerfil: req.file.filename
        };
        usuarios.push(nuevoUsuario);
		let newUserJSON = JSON.stringify(usuarios);
		fs.writeFileSync(usersFilePath, newUserJSON);
		res.redirect('/users/register');
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