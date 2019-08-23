const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async(user, done) => {
    const useer = await User.findById(id);
    done(null, useer)
})

passport.use('Passport-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass',
    passReqToCallback: true
},async (req, email, pass, done) => {
        const userdb = new User()
        
        done(null, userdb)
}))