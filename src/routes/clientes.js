// Se encargara de almacenar las rutas principales
const express = require('express');
const routcliente = express.Router(); //Se definen las rutas del servidor

//Registro cliente
routcliente.get('/registrar_cliente', (req, res, next) => {
    res.render('index_registro_clientes.ejs');  
})

routcliente.post('/registrar_cliente', (req, res, next) => {
    res.send('Ingresados correctamente');
})

module.exports = routcliente;