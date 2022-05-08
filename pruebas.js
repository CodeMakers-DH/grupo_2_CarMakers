
const db = require('./database/models')

let usuarios =   db.Usuario.findAll({raw: true,
    nest: true})
console.log(usuarios)
