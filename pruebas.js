const db = require('./database/models')

let usuarios =   db.Usuario.findAll({raw: true,
    nest: true})
    .then(usuarios=> console.log(usuarios))
console.log(usuarios)

/* let usuarios = User.findAll()
.then(usuarios=> res.JSON(usuarios.value))
console.log(usuarios); */


let userFromCookie = db.Usuario.findOne({
    where: {email : emailInCookie}
}).then((resultado) => {
resultado
});

console.log(userFromCookie)