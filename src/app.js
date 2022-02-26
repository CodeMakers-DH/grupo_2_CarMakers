const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRouter');

//configuracion del path publico
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//configuracion del template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

// configuracion de rutas
app.use(mainRoutes);

// llamada al servidor en puerto 5000
app.listen(5000, () => {
    console.log('Servidor para CarMakers');
})
