// Se encargara de almacenar las rutas principales
const express = require('express');
const routeventanap = express.Router(); //Se definen las rutas del servidor

//Registro Trabajador
routeventanap.get('/venta_cliente_inicio', (req, res, next) => {
    res.render('venta_principal.ejs');  
})

routeventanap.post('/registrar_trabajador', (req, res, next) => {
    res.send('HOLA');
})

module.exports = routeventanap;