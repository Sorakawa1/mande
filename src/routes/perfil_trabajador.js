// Se encargara de almacenar las rutas principales
const express = require('express');
const perfiltra = express.Router(); //Se definen las rutas del servidor

perfiltra.get('/perfil_trabajo', (req, res, next) => {
    console.log("cookies"+!req.cookies.usuario)
    if(!req.cookies.usuario){
        res.redirect('/login_trabajador');
    }
    console.log("cookies en ventana perfil trabajador: "+ req.cookies.usuario);
    res.render('perfil_trabajador.ejs');
})

perfiltra.post('/perfil_trabajo', (req, res, next) => {
    
})


module.exports = perfiltra;