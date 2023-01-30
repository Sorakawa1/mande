// Se encargara de almacenar las rutas principales
const express = require('express');
const routecateg = express.Router(); //Se definen las rutas del servidor

routecateg.get('/categorias', (req, res, next) => {
    res.render('categoria.ejs');  
})

routecateg.post('/categorias', (req, res, next) => {
    res.send('cliente');
})

routecateg.get('/resultado', (req, res, next) => {
    res.render('resultados.ejs');  
})

routecateg.post('/resultado', (req, res, next) => {
    res.send('cliente');
})

module.exports = routecateg;