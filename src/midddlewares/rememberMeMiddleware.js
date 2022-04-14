function rememberMeMiddleware(req,res,next){
    if(req.cookies.rememberMe != undefined && req.session.usuarioLogeado == undefined){
            let usersJSON = fs.readFileSync(usersFilePath, {errors: errors.errors})
            let users;
            let usuarioALoguearse;
            if(usersJSON == ''){
                users=[];
            }else{
                users=JSON.parse(usersJSON);
            }
            for(let i = 0; i < users.length; i++){
                if(users[i].email == req.cookies.rememberMe){
                    usuarioALoguearse = users[i];
                    return res.send('Te logueaste: ' + usuarioALoguearse.nombres + ' ' + usuarioALoguearse.apellidos );
            }
        }
        req.session.usuarioLogueado = usuarioALoguearse;
     }
    next();
}

module.exports = rememberMeMiddleware;