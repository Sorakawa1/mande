// Se encargara de almacenar las rutas principales
const express = require('express');
const router1 = express.Router(); //Se definen las rutas del servidor

//Portal principal
router1.get('/', (req, res, next) => {
    res.render('principal.ejs');
})

router1.get('/inicio', (req, res, next) => {
    res.render('principal.ejs');
})

//Cliente y trabajador logins
router1.get('/login_trabajador', (req, res, next) => {
    res.render('index_login_trabajador.ejs');
})

router1.get('/login_cliente', (req, res, next) => {
    res.render('index_login_clientes.ejs');
})


module.exports = router1;