const express = require('express');
const path = require('path');
const app = express();


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(5000, () => {
    console.log('Servidor para CarMakers');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/detalleproducto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/detalleproducto.html'))
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

