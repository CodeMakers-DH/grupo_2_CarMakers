/* const { resetWatchers } = require('nodemon/lib/monitor/watch'); */
const User = require('../modelos/users');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;

/* 


const db = require('../../database/models')

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    let userFromCookie = db.Usuario.findOne({
                                        where: {email : emailInCookie}
    }).then((resultado) => {
        resultado
    });
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;

 */