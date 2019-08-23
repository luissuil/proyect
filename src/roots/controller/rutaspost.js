const express = require('express')
const ctr = {}

ctr.index = (req,res) =>{
    console.log(req.body)
    res.render('html', {'title' : 'Inicio'})
}

 module.exports = ctr;
