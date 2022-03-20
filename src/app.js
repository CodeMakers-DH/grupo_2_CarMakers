const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRouter');
const productRoutes = require('./routes/productRouter');
const usersRoutes = require('./routes/usersRouter');

//configuracion del path publico
app.use(express.static('public'));

//middleware para traer json
//Configuración del entorno
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//congiguracion override
const methodOverride = require('method-override');
const { application } = require('express');
app.use(methodOverride());

//configuracion del template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

// configuracion de rutas
app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', usersRoutes);

// llamada al servidor en puerto 5000
app.listen(5010, () => {
    console.log('Servidor para CarMakers');
})




