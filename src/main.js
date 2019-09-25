const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const ip = require('ip')
const tiza = require('chalk')
const passport = require('passport')
const session = require('express-session')
const ikk = require('inquirer')


// initializations
const app = express();
require('./database');
require('./passport/local-auth');

// settings
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//midis
app.use(morgan('dev'))
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())
app.use(passport.initialize())
app.use(session({
    secret: 'luisfer',
    resave: false,
    saveUninitialized: false,
}))
    //roots
app.use('/', require('./roots'))
    //static
app.use(express.static(path.join(__dirname, './public/')));
app.listen(app.get('port'),()=>{
    console.log('el servidor esta en el puerto ' + app.get('port'), " en el servidor: ", ip.address('public','ipv4') )
} 
    
)
function preguntar(){

  setTimeout(()=>{  ikk.prompt({
                        type: 'ssa',
                        name: "pass",
                        message: "ingresa la contraseña nuenava",
                        
                      })
                      .then((respuesta) => {
                        console.log(respuesta);
                      });},1000)
}
preguntar()//sjsdkjf
