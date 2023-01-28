// Se encargara de almacenar las rutas principales
const express = require('express');
const routrabajo = express.Router(); //Se definen las rutas del servidor

//Registro Trabajador
routrabajo.get('/registrar_trabajador', (req, res, next) => {
    res.render('index_registro_trabajo.ejs');  
})

routrabajo.post('/registrar_trabajador', (req, res, next) => {
    res.send('Bienvenido esclavo');
})

module.exports = routrabajo;