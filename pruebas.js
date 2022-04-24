const db = require('./database/models')
db.Producto.create({
    descripcion: "un modelo" ,
    nombreModelo: "modelo fuego",
    imgModelo: "c:/modelo.jpg",
    deliveryEstimado:25,
    precio: 125,
    autonomia: 1564,
    velocidadMaxima: 265,
    tiempoDeCeroCien: 12,
    ingreso: null
})