const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRouter');
const productRoutes = require('./routes/productRouter');
const usersRoutes = require('./routes/usersRouter');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var rememberMeMiddleware = require('./midddlewares/rememberMeMiddleware');
const userLoggedMiddleware = require('./midddlewares/userLoggedMiddleware');

app.use(express.static('public'));

app.use(cookieParser());
app.use(rememberMeMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(session({
    secret: 'CarMakers',
    resave:false,
    saveUninitialized:false,
}));


app.use(userLoggedMiddleware);

//congiguracion override
const methodOverride = require('method-override');
const { application } = require('express');
app.use(methodOverride('_method'));

//configuracion del template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))

// configuracion de rutas
app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', usersRoutes);

// llamada al servidor en puerto 5000

/*app.listen(5000, () => {
    console.log('Servidor para CarMakers');
})*/
// Para Heroku

app.listen(process.env.PORT||1006, function(){
    console.log('Servidor funcionando');
});



