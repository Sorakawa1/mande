// Se encargara de almacenar las rutas principales
const express = require('express');
const perfilcli = express.Router(); //Se definen las rutas del servidor

perfilcli.get('/perfil_cliente', async(req, res) => {
    const celular = req.cookies.usuario;
    console.log("cookies para el perfil " + celular);
    if(!celular){
        res.redirect("/login_cliente");
    }
    const url= 'http://localhost:5000/api/client/'+ celular;
    const clientes= await getDataFromAPI(url);
    //console.log('clientes: ',clientes);
  
    const cliente = clientes[0];
   //console.log('cliente: ',cliente);

    res.render('perfil_cliente.ejs', {cliente: cliente});
})

perfilcli.post('/perfil_cliente', async(req, res) => {
    const datos = req.body;
    console.log("datos",datos);
    const url= 'http://localhost:5000/api/client/' + datos.celular;
    console.log("url: ",url);
    const actualizo = await UpdateDataFromAPI(url,datos);
    console.log("url: ",url);
   
//    if(actualizo){
//        console.log("actualizo");
//      }else{
//         console.log("Error");
//     }
    res.redirect("/perfil_cliente");
    
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

async function UpdateDataFromAPI(url,datos) {
    try {
        const response = await fetch(url,
            {   
                method:"put",
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

module.exports = perfilcli;