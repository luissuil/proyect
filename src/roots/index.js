const express = require('express');
const router = express.Router();
const rutasPost = require('./controller/rutaspost')
const passport = require('passport')
//login
router.get('/', rutasPost.index)

router.post('/', passport.authenticate('Passport-login', {
    successRedirect: '/mala',
    failureRedirect: '/'
}))

router.get('/mala',(req,res, next) => {
    res.render('mala', {'title' : 'Inicio'})
})

module.exports = router