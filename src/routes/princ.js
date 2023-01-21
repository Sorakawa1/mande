// Se encargara de almacenar las rutas principales
const express = require('express');
const router1 = express.Router(); //Se definen las rutas del servidor

router1.get('/', (req, res, next) => {
    res.render('indexp.ejs');
})

router1.get('/registrar', (req, res, next) => {
    res.render('registro.ejs');  
})

router1.post('/registrar', (req, res, next) => {
    console.log(req.body);
    console.log(req.body);
    res.send('Ingresados correctamente');
})

router1.get('/login', (req, res, next) => {
    
})

router1.post('/login', (req, res, next) => {
    
})

module.exports = router1;