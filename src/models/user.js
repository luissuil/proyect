const mongoose = require('mongoose')
const Schame = mongoose.Schema

const userSchame = new Schame({

    user: String,
    password: String,
    horas: Number 

})

module.exports = mongoose.model('user',userSchame)