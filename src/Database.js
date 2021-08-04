const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:127.0.0.1:27017/notes-db-app',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then(db => console.log('db is conection complete')).catch(err=>console.error(err));

