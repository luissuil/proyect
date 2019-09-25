const express = require('express');
const router = express.Router();
const rutasPost = require('./controller/rutaspost')
const passport = require('passport')
//login
router.get('/', rutasPost.index)

router.post('/', passport.authenticate('passport-l', {
    successRedirect: '/Bienvenido',
    failureRedirect: '/'
}))

router.get('/Bienvenido',(req,res, next) => {
    res.render('bienvenido', {'title' : 'Inicio'})
})

module.exports = router