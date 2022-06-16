
const db = require('./database/models')
const fs = require('fs')

db.Usuario.findAll({raw:true}).then((result) =>{
    fs.writeFileSync("./src/data/usuarios.json", JSON.stringify(result) )})
    
