// Se encargara de almacenar las rutas principales
const express = require('express');
const routrabajo = express.Router(); //Se definen las rutas del servidor
const bcrypt = require('bcrypt')

//Registro Trabajador
routrabajo.get('/registrar_trabajador', (req, res, next) => {
    res.render('index_registro_trabajo.ejs');  
})

routrabajo.post('/registrar_trabajador', async(req, res, next) => {
    const celular = req.body.celular;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    const contrasena2 = req.body.contrasena2;
    const ubicacion = req.body.ubicacion;
    const doc_ruta = 'grtrhbytuj';
    const es_cliente = false;
    const cedula_trabajador = req.body.cedula;
    const foto= 'ghbnunj7j7676';

    console.log(celular, nombre, apellido, correo, contrasena, contrasena2, ubicacion, doc_ruta, es_cliente, cedula_trabajador, foto);

    const hashedPassword = await bcrypt.hash(contrasena2, 10);
    
    const datos = {
            celular: celular,
             nombre: nombre, 
             apellido: apellido, 
             correo: correo, 
             contrasena: hashedPassword, 
             ubicacion: ubicacion, 
             doc_ruta : doc_ruta,
             es_cliente: es_cliente,
             cedula: cedula_trabajador, 
             foto: foto
}

console.log("estos son los datos datos", datos);
const url= 'http://localhost:5000/api/WORKER';
console.log("url: ",url);
const actualizo = await insertDataFromAPI(url,datos);
console.log("url: ",url);

    res.redirect('/login_trabajador');    
   // res.send('Bienvenido esclavo');
})

async function insertDataFromAPI(url,datos) {
try {
    const response = await fetch(url,
        {   
            method:"post",
            body:JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
              }
        }
      );
    const msg = await response.json();
    
    console.log(msg);
   // return msg;
} catch (error) {
    console.error(error);
}
}

module.exports = routrabajo;