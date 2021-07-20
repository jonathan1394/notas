const mongoose = require('mongoose');
const {Schema}=mongoose;

const NoteSchema = new Schema({
    title:{type: String, required: true },
    descripcion:{type: String, required: true},
    date:{type: Date, defaults: Date.now},
});

module.exports = mongoose.model('Note',NoteSchema);