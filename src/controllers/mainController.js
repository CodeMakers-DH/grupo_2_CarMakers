const path = require('path');

let modelos =[
    {
        idModelo: 0,
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.",
        nombreModelo: "Pucará",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "90 dias",
        precio: '$2.5M',
        caracteristicas: 
        [
            { 
                nombreCaractiristica: "Autonomia",
                valor: "1500 kilometros"
            },
            { 
                nombreCaractiristica: "Velocidad Máxima",
                valor: "230 km/h"
            },
            { 
                nombreCaractiristica: "Tiempo de cero a 100 km/h",
                valor: "3 segundos"
            },
            
        ]
    },
    {
        idModelo: 1,
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.",
        nombreModelo: "Quilmes",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "120 dias",
        precio: '$2.2M',
        caracteristicas: 
        [
            { 
                nombreCaractiristica: "Autonomia",
                valor: "1300 kilometros"
            },
            { 
                nombreCaractiristica: "Velocidad Máxima",
                valor: "200 km/h"
            },
            { 
                nombreCaractiristica: "Tiempo de cero a 100 km/h",
                valor: "60 segundos"
            },
            
        ]
    },
    {
        idModelo: 2,
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.",
        nombreModelo: "Tronador",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "60 dias",
        precio: '$2M',
        caracteristicas: 
        [
            { 
                nombreCaractiristica: "Autonomia",
                valor: "1000 kilometros"
            },
            { 
                nombreCaractiristica: "Velocidad Máxima",
                valor: "180 km/h"
            },
            { 
                nombreCaractiristica: "Tiempo de cero a 100 km/h",
                valor: "65 segundos"
            },
            
        ]
    },
    {
        idModelo: 3,
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.",
        nombreModelo: "Pacuy",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "30 dias",
        precio: '$1.5M',

        caracteristicas: 
        [
            { 
                nombreCaractiristica: "Autonomia",
                valor: "800 kilometros"
            },
            { 
                nombreCaractiristica: "Velocidad Máxima",
                valor: "180 km/h"
            },
            { 
                nombreCaractiristica: "Tiempo de cero a 100 km/h",
                valor: "95 segundos"
            },
            
        ]
        
    },
    {
        idModelo: 4,
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.",
        nombreModelo: "Llullaillaco",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "90 dias",
        precio: '$5M',
        caracteristicas: 
        [
            { 
                nombreCaractiristica: "Autonomia",
                valor: "1800 kilometros"
            },
            { 
                nombreCaractiristica: "Velocidad Máxima",
                valor: "180 km/h"
            },
            { 
                nombreCaractiristica: "Tiempo de cero a 100 km/h",
                valor: "25 segundos"
            },
        ]
    }
]

//controladores de vitas
const controlador ={
    index:(req, res) => {
        res.render('index')
    },
    detalleProducto: (req, res) => {
        let idModelo = req.params.idModelo;
        res.render('detalleproducto', {"modelos": modelos[idModelo] })
    },
    carritoCompras: (req, res) => {
        res.render('carrito')
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    }
}

// exportacion del modulo
module.exports = controlador;