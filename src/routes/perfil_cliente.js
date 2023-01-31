// Se encargara de almacenar las rutas principales
const express = require('express');
const perfilcli = express.Router(); //Se definen las rutas del servidor
const usuariosLog =require('../routes/login.js');


perfilcli.get('/perfil_cliente', (req, res, next) => {
    if(!req.cookies.usuario){
        res.redirect('/login_trabajador');
    }
    console.log("cookies en ventana perfil trabajador: "+ req.cookies.usuario);
    res.render('perfil_cliente.ejs')
})

perfilcli.post('/perfil_cliente', (req, res, next) => {
})


module.exports = perfilcli;