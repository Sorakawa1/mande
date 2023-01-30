// Se encargara de almacenar las rutas principales
const express = require('express');
const routevalidacliente = express.Router(); //Se definen las rutas del servidor

//Registro cliente
routevalidacliente.get('/validar_client', (req, res, next) => {
    res.render('venta_principal.ejs');  
})

routevalidacliente.post('/validar_client', (req, res, next) => {
    res.send('Ingresados correctamente');
})

module.exports = routevalidacliente;