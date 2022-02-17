const router = require('express').Router();
const Note= require('../Models/Notes');

router.get('/notas/add',(req, res)=>{
    res.render('notas/New-notes');
})

router.post('/notas/New-notes', async (req, res)=>{
    const {title, descripcion}=req.body;
    //console.log(req.body);
    const error = [];
    if(!title){
        error.push({text: 'Please Write a title'});
    }
    if(!descripcion){
        error.push({text:"Pleace Write a Description"});
    }
    if(error.length>0){
        res.render('notas/New-notes',{
            title,
            descripcion,
            error});
    }else{
        const NewNote = new Note({title,descripcion});
        await NewNote.save();
        req.flash('success_msg','Nota Agregada Satifactoriamente');
        res.redirect('/notas');
    }
    
});

router.get('/notas',async(req, res) => {
    const Notes = await Note.find().sort('date');
    res.render('notas/all-notas',{Notes});
});


router.get('/notas/edit/:id',async (req, res)=>{
    
    const Nota = await Note.findById(req.params.id);
    res.render('notas/Edit-Note',{Nota});
});

router.put('/notas/Edit-Note/:id',async (req, res)=>{
    const {title,descripcion}=req.body; 
    await Note.findByIdAndUpdate(req.params.id,{title, descripcion});
    req.flash('success_msg','Nota Editada Correctamente');
    res.redirect('/notas');
});

router.delete('/notas/delete/:id',async (req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Nota Eliminada Correctamente');
    res.redirect('/notas');
});

module.exports = router;