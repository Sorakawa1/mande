// Se encargara de almacenar las rutas principales
const express = require('express');
const perfilcli = express.Router(); //Se definen las rutas del servidor

perfilcli.get('/perfil_cliente', (req, res, next) => {
    res.render('perfil_cliente.ejs')
})

perfilcli.post('/perfil_cliente', (req, res, next) => {
})


module.exports = perfilcli;