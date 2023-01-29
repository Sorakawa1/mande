// Se encargara de almacenar las rutas principales
const express = require('express');
const routeventatrab = express.Router(); //Se definen las rutas del servidor

//TRABAJADOR
routeventatrab.get('/venta_trabajo_inici', (req, res, next) => {
    res.render('venta_principal_trabajo.ejs');  
})

routeventatrab.post('/venta_trabajo_inici', (req, res, next) => {
    res.send('trabajador');
})

module.exports = routeventatrab;