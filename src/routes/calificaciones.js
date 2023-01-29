// Se encargara de almacenar las rutas principales
const express = require('express');
const routecalif = express.Router(); //Se definen las rutas del servidor

//Registro Trabajador
routecalif.get('/calificar', (req, res, next) => {
    res.render('calificacion.ejs');  
})

routecalif.post('/calificar', (req, res, next) => {
    res.send('calificado con exito');
})

module.exports = routecalif;