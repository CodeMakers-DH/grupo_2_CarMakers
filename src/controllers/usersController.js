const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
//cargar db Usuarios
const db = require('../../database/models')
//====
let usuarios = db.Usuario.findAll({raw: true,
    nest: true}).then(a => console.log(a))
console.log(usuarios)
//==================
const user = require('../modelos/users');
//JSON==============
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
//var usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
//==================
let bcrypt = require('bcrypt');



const controlador ={
    index: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios=> res.render('usuarios', {usuario: usuarios}))
    },
    
    login: (req, res) => {
        res.render('login')
        db.Usuario.findAll({raw:true}).then((result) =>{
            fs.writeFileSync("./src/data/usuarios.json", JSON.stringify(result) )})
    },

    processLogin: (req,res) => {
        db.Usuario.findOne(
            {where: {email: req.body.email}}
        ).then((resultado) => {
            if(resultado){
                if (bcrypt.compareSync(req.body.password, resultado.password)){
                    
                    let usuarioALoguearse = {
                        idUsuario: resultado.idUsuario,
                        nombres: resultado.nombres,
                        apellidos: resultado.apellidos,
                        email: resultado.email,
                        imgPerfil: resultado.imgPerfil,
                        is_admin: 0
                    };

                    delete resultado.password;
                    req.session.userLogged = usuarioALoguearse;

                    if(req.body.rememberMe){
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                    }
                    
                    return res.redirect('profile');
                } else {
                    return res.render('login', {
                        errors: {
                            password: {
                                msg: 'La contraseña no es correcta'
                            }
                        }
                    })
                }

            }
        
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'No existe una cuenta con esa dirección de correo electrónico'
                    }
                }
            })
        
        });

    },

    profile: (req, res) => {
            db.Usuario.findAll()
            .then(usuarios=> res.render('profile', {usuario: usuarios,
                                                    user: req.session.userLogged}));
    },

    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    register: (req, res) => {
        return res.render('register');
    },

    processRegister: (req, res) => {

        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0) {
            return res.render('register', {errors: resultValidation.mapped(), oldData: req.body})
        }

        if(req.body.admin && req.file != undefined){
            db.Usuario.create({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imgPerfil: req.file.filename,
                is_admin: 1});
        }else if (req.body.admin && req.file == undefined){
            db.Usuario.create({            
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imgPerfil: null,
                is_admin: 1});
        }
        
        if(!req.body.admin && req.file != undefined){
            db.Usuario.create({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imgPerfil: req.file.filename,
                is_admin: 0});
        }else if (!req.body.admin && req.file == undefined){
            db.Usuario.create({            
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                imgPerfil: null,
                is_admin: 0});
        }




		res.redirect('/users/login');
    },

    editarUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        db.Usuario.findByPk(idUsuario)
        .then(usuarios=> 
            {
                if (usuarios){res.render('editarUsuario', {"usuarioToEdit": usuarios}) }
                else{res.status(404).render('error')}
                
            })
        .then(resultado => {
            console.log(resultado)
        })
          
    },

/* actualizar CRUD Usuarios  Eliminar, Actualizar, */

    crear: (req, res) => {
		let nuevoUsuario = req.body;
        
        nuevoUsuario.id = usuarios[usuarios.length-1].id +1
		usuarios.push(nuevoUsuario)

		res.redirect('/users')
    }, 

    actualizar: (req,res) => {
        const resultValidation = validationResult(req);
        let idUser = req.params.idUsuario;
        let newUser = req.body;

        if(resultValidation.errors.length > 0){
            db.Usuario.findByPk(idUser)
            .then(usuarios => res.render('editarUsuario', {'usuarioToEdit': usuarios, oldData: req.body, errors: resultValidation.mapped()}))
        }else{
            db.Usuario.update({
                nombres: newUser.nombres,
                apellidos: newUser.apellidos,
                email: newUser.email,
                password: newUser.password
            },
                {where:{idUsuario: idUser}})
                .then(usuarios => usuarios)
                res.redirect('/users');
        }
    },
/*
    editarUsuario: (req, res) => {
        let idUsuario = req.params.idUsuario;
        res.render('editarUsuario',{usuarioToEdit :usuarios.filter((usuario)=> usuario.id == idUsuario)[0] } )
    },
*/
/*     actualizar: (req, res)=>{
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
    }, */

    //eliminar usuario
    eliminarUsuario : (req, res) => {
		let idUsuario = req.params.idUsuario;
        db.Usuario.destroy({
            where:{idUsuario:idUsuario}
        })
		res.redirect('/users')
	},
    imgProfile: (req,res) => {
        let newImage = req.file.filename;
        let idUser = req.params.idUsuario;

        console.log('imagen' + newImage);
        console.log('usuario' + idUser);


        db.Usuario.update({imgPerfil: newImage},
                          {where:{idUsuario: idUser}}
        )

        res.redirect('/profile')

        console.log('este es el usuario logeado' + usuarioLogeado)
    }


}

// exportacion del modulo
module.exports = controlador;

