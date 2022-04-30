const res = require('express/lib/response')
const db = require('./database/models')

db.Usuario.findAll().then(usuario=> console.log(usuario))
.catch(input=>console.log("esto es una error"))

console.log('hola')