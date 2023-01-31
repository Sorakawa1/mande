// Se encargara de almacenar las rutas principales
const express = require('express');
const routeventanap = express.Router(); //Se definen las rutas del servidor

//CLIENTE 
routeventanap.get('/venta_cliente_inicio', (req, res, next) => {
    if(!req.cookies.usuario){
        res.redirect('/login_cliente');
    }
    console.log("cookies en ventana inicio cliente: "+ req.cookies.usuario)
    res.render('venta_principal.ejs');  
})

routeventanap.post('/venta_cliente_inicio', (req, res, next) => {
    res.send('cliente');
})


module.exports = routeventanap;