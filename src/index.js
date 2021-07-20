const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const Handlebars =require('handlebars');
const methodOverride = require('method-override');
const expressSesion= require('express-session');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const flash= require('connect-flash');

// initializacion 
const app = express();
require('./Database');

//setting
app.set('port', process.env.PORT || 6969);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',hbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partial'),
    extname:'.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),

}));
app.set('view engine', '.hbs');


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(expressSesion({
    secret: 'mysecretAPP',
    resave: true,
    saveUninitialized: true,

}))
app.use(flash());


//Global Variables
app.use((req, res, next)=>{
    res.locals.succes_msg=req.flash('succes_msg');
    res.locals.error_msg=req.flash('error_msg');
    next();
});


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