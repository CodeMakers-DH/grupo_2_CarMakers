const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRouter');
const productRoutes = require('./routes/productRouter');

//configuracion del path publico
app.use(express.static('public'));

//configuracion del template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

// configuracion de rutas
app.use(mainRoutes);
app.use(productRoutes);

// llamada al servidor en puerto 5000
app.listen(5000, () => {
    console.log('Servidor para CarMakers');
})

