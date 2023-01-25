// Se encargara de almacenar las rutas principales
const express = require('express');
const router1 = express.Router(); //Se definen las rutas del servidor

router1.get('/', (req, res, next) => {
    res.render('principal.ejs');
})

router1.get('/login', (req, res, next) => {
    res.render('index_login.ejs');
})

//Cliente y trabajador
router1.get('/login_cliente', (req, res, next) => {
    res.render('index_login_clientes.ejs');
})

router1.get('/login_t', (req, res, next) => {
    res.render('index_login_trabajador.ejs');
})
//

//Registro cliente
router1.get('/registrar_cliente', (req, res, next) => {
    res.render('index_registro_clientes.ejs');  
})

router1.post('/registrar_cliente', (req, res, next) => {
    console.log(req.body);
    res.send('Ingresados correctamente');
})
////

//Registro Trabajador
router1.get('/registrar_trabajador', (req, res, next) => {
    res.render('index_registro_trabajo.ejs');  
})

router1.post('/registrar_trabajador', (req, res, next) => {
    console.log(req.body);
    res.send('Bienvenido esclavo');
})
////

router1.get('/categoria', (req, res, next) => {
    res.render('categorias.ejs');
})

router1.post('/categoria', (req, res, next) => {
    
})

module.exports = router1;