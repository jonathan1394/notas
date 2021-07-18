const router = require('express').Router();

router.get('/users/signin', (req, res)=>{
  res.send('Ingreso');  
});

router.get('/users/signup',(req, res)=>{
    res.send('Loguin');
});

module.exports = router;