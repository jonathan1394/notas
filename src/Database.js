const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/notes-db-app',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
}).then(db => console.log('db is conection complete')).catch(err=>console.error(err));

