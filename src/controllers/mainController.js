const path = require('path');

let autos =[
    {
        idModelo: 0,
        nombreModelo: "Pucará",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "90 dias",
        precio: '$2.5M',
        caracteristicas: {
            autonomia: "1500 kilometros",
            velMaxima: "230 km/h",
            tiempoDe0a100: "30 segundos",
        }
    },
    {
        idModelo: 1,
        nombreModelo: "Quilmes",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "120 dias",
        precio: '$2.2M',
        caracteristicas: {
            autonomia: "1300 kilometros",
            velMaxima: "200 km/h",
            tiempoDe0a100: "60 segundos",
        }
    },
    {
        idModelo: 2,
        nombreModelo: "Tronador",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "60 dias",
        precio: '$2M',
        caracteristicas: {
            autonomia: "1000 kilometros",
            velMaxima: "180 km/h",
            tiempoDe0a100: "65 segundos",
        }
    },
    {
        idModelo: 3,
        nombreModelo: "Pacuy",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "30 dias",
        precio: '$1.5M',
        caracteristicas: {
            autonomia: "800 kilometros",
            velMaxima: "180 km/h",
            tiempoDe0a100: "95 segundos",
        }
    },
    {
        idModelo: 4,
        nombreModelo: "Llullaillaco",
        imgModelo: "/imgs/producto.jpg",
        deliveryEstimado: "90 dias",
        precio: '$5M',
        caracteristicas: {
            autonomia: "1800 kilometros",
            velMaxima: "250 km/h",
            tiempoDe0a100: "25 segundos",
        }
    },
]

//controladores de vitas
const controlador ={
    index:(req, res) => {
        res.render('index')
    },
    detalleProducto: (req, res) => {
        res.render('detalleproducto')
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