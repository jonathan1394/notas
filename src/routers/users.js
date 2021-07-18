const router = require('express').Router();

router.get('/users/signin', (req, res)=>{
  res.render('user/signin.hbs');  
});

router.get('/users/signup',(req, res)=>{
    res.render('user/signup.hbs');
});

module.exports = router;