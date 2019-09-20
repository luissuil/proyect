const mongoose = require('mongoose')
const Schame = mongoose.Schema
const NodeRSA = require("node-rsa");
const bcrypt = require('bcryptjs');
const userSchame = new Schame({

    user: String,
    password: String,
    horas: Number 

})

userSchame.methods.encriptar = password =>{
   return bcrypt.hash(password, bcrypt.genSaltSync(10));
    
}
userSchame.methods.comparar = password => {
    return bcrypt.compare(password,this.password );
};

module.exports = mongoose.model('user',userSchame)