const path = require('path');
const fs = require('fs');
const db = require("../../../database/models");
const {validationResult} = require('express-validator');
const Op = db.Sequelize.Op;
const controllerAPI = {
    
    list: (req,res) => {
        db.Usuario
                    .findAll()
                    .then(usuario => {
                        return res.status(200).json({
                            total: usuario.length,
                            data: usuario,
                            status: 200
                        })
                    })
    },

    show: (req,res) => {
        db.Usuario
                    .findByPk(req.params.idUsuario)
                    .then(usuario => {
                        return res.status(200).json({
                            data: usuario,
                            status: 200
                        })
                    })
    },

}
module.exports = controllerAPI;