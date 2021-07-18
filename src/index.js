const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const expressSesion= require('express-session');

// initializacion 
const app = express();
require('./Database');

//setting
app.set('port', process.env.PORT || 6969);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',hbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',

}));
app.set('viwe engine', '.hbs');


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(expressSesion({
    secret: 'mysecretAPP',
    resave: true,
    saveUninitialized: true,

}))

//Global Variables

//Routes
app.use(require('./routers/index'));
app.use(require('./routers/notes'));
app.use(require('./routers/users'));
//Statick Files
app.use(express.static(path.join(__dirname,'public')));



// init server
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto', app.get('port'));
});