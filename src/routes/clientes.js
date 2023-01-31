// Se encargara de almacenar las rutas principales
const express = require('express');
const routcliente = express.Router(); //Se definen las rutas del servidor

//Registro cliente
routcliente.get('/registrar_cliente', (req, res, next) => {
    res.render('index_registro_clientes.ejs');  
})


routcliente.post('/registrar_cliente', function(req, res) {
  let sampleFile;
  let path;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No hay nada aqui.');
      }
    
      sampleFile = req.files.sampleFile;
      path = __dirname+'/img/'+sampleFile.name;
      sampleFile.mv(path, function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('Si cargo el archivo');
      });
})

module.exports = routcliente;