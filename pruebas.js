
const db = require('./database/models')
const fs = require('fs')

db.Usuario.findAll({raw:true}).then((result) =>{
    fs.writeFile("./src/data/usuarios.json", JSON.stringify(result), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          
        }
      })
} )