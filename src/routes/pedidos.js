// Se encargara de almacenar las rutas principales
const express = require('express');
const routepedido = express.Router(); //Se definen las rutas del servidor

//Registro Trabajador
routepedido.get('/pedidos_trab', (req, res, next) => {
    res.render('pedidos.ejs');
})

routepedido.post('/pedidos_trab', (req, res, next) => {
    res.send('Entro un pedido');
})

module.exports = routepedido;