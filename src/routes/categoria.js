// Se encargara de almacenar las rutas principales
const express = require('express');
const routecateg = express.Router(); //Se definen las rutas del servidor
const bcrypt = require('bcrypt');

routecateg.get('/categorias', (req, res, next) => {
    res.render('categoria.ejs');  
})

routecateg.post('/categorias', (req, res, next) => {
    res.send('cliente');
})

routecateg.get('/resultado', async(req, res, next) => {
    const valor=req.query.buscar;
    const url= 'http://localhost:5000/api/workerView/'+valor;
    const trabajo= await getDataFromAPI(url);
    console.log(trabajo);
    res.render('resultados.ejs', {trabajo});  
})

routecateg.post('/resultado', (req, res, next) => {
    res.send('cliente');
})

async function getDataFromAPI(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = routecateg;