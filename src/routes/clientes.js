// Se encargara de almacenar las rutas principales
const express = require('express');
const routcliente = express.Router(); //Se definen las rutas del servidor
const bcrypt = require('bcrypt')

//Registro cliente
routcliente.get('/registrar_cliente', (req, res, next) => {
    res.render('index_registro_clientes.ejs');  
})


routcliente.post('/registrar_cliente', async(req, res, next) => {
  // let sampleFile;
  // let path;

  //   if (!req.files || Object.keys(req.files).length === 0) {
  //       return res.status(400).send('No hay nada aqui.');
  //     }
    
  //     sampleFile = req.files.sampleFile;
  //     path = __dirname+'/img/'+sampleFile.name;
  //     sampleFile.mv(path, function(err) {
  //       if (err)
  //         return res.status(500).send(err);
    
  //       res.send('Si cargo el archivo');
  //     });

  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const correo = req.body.correo;
  const contrasena = req.body.contrasena;
  const contrasena2 = req.body.contrasena2;
  const ubicacion = req.body.ubicacion;
  const es_cliente = true;
  const cedula_cliente = req.body.cedula;
  const celular = req.body.celular;

  console.log(nombre, apellido, correo, contrasena, contrasena2, ubicacion, es_cliente, cedula_cliente, celular);

  const hashedPassword = await bcrypt.hash(contrasena2, 10);

  const datos = {nombre: nombre, 
                 apellido: apellido, 
                 correo: correo, 
                 contrasena: hashedPassword, 
                 ubicacion: ubicacion, 
                 es_cliente: es_cliente,
                 cedula: cedula_cliente, 
                 celular: celular
  }
    console.log("estos son los datos datos", datos);
    const url= 'http://localhost:5000/api/client';
    console.log("url: ",url);
    const actualizo = await insertDataFromAPI(url,datos);
    console.log("url: ",url);
   
    res.redirect('/login_cliente');    
    //res.send('Ingresados correctamente');
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


module.exports = routcliente;