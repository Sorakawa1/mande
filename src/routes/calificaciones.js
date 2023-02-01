// Se encargara de almacenar las rutas principales
const express = require('express');
const routecalif = express.Router(); //Se definen las rutas del servidor

//Registro Trabajador
routecalif.get('/calificar', async (req, res, next) => {
    const response = await fetch('http://localhost:5000/api/worker/3226256925', {
  method: "DELETE"});
  const response2 = await fetch('http://localhost:5000/api/servicio', {
  method: "POST"});
    res.render('calificacion.ejs');  
})

routecalif.post('/calificar', (req, res, next) => {
    res.send('calificado con exito');
})

module.exports = routecalif;