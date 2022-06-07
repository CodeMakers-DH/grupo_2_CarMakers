const path = require('path');
const fs = require('fs');
const db = require("../../../database/models");
const {validationResult} = require('express-validator');
const Op = db.Sequelize.Op;


const controllerAPI = {
    list: (req,res) => {
        db.Producto
                    .findAll()
                    .then(productos => {
                        return res.status(200).json({
                            total: productos.length,
                            data: productos,
                            status: 200
                        })
                    })
    },

    show: (req,res) => {
        db.Producto
                    .findByPk(req.params.idModelo)
                    .then(producto => {
                        return res.status(200).json({
                            data: producto,
                            status: 200
                        })
                    })
    },

    store: (req,res) => {
        db.Producto
                    .create(req.body)
                    .then(producto => {
                        return res.status(200).json({
                            data: producto,
                            status: 200,
                            created: 'Ok'
                        })
                    })
    },

    delete: (req,res) => {
        db.Producto
                    .destroy({
                        where: {
                            idModelo: req.params.idModelo
                        }
                    })
                    .then(response => {
                        return res.json(response)
                        })
    },

    search: (req,res) => {
        db.Producto
                    .findAll({
                        where: {
                            nombreModelo: {[Op.like]: '%' + req.query.keyword + '%'}
                        }
                    })
                    .then(products => {
                        if(products.length > 0){
                            return res.status(200).json(products);
                        }
                        return res.status(200).json('No hemos encontrado lo que buscas.');
                    })
                    
    },
}

module.exports = controllerAPI;
