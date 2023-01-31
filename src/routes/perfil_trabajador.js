// Se encargara de almacenar las rutas principales
const express = require('express');
const perfiltra = express.Router(); //Se definen las rutas del servidor

perfiltra.get('/perfil_trabajo', async(req, res, next) => {
    const celular = req.cookies.usuario;
    console.log("cookies para el perfil " + celular);
    if(!celular){
        res.redirect("/login_trabajador");
    }
    const url= 'http://localhost:5000/api/WORKER/'+ celular;
    const trabajadores= await getDataFromAPI(url);
    //console.log('trabajadores: ',trabajadores);
  
    const trabajador = trabajadores[0];
   // console.log('cliente: ',cliente);

    res.render('perfil_trabajador.ejs', {trabajador: trabajador})
})

perfiltra.post('/perfil_trabajo', async(req, res, next) => {
    const datos = req.body;
    console.log("datos",datos);
    const url= 'http://localhost:5000/api/WORKER/' + datos.celular;
    console.log(datos.celular);
    console.log("url: ",url);
    const actualizo = await UpdateDataFromAPI(url,datos);
   
//    if(actualizo){
//        console.log("actualizo");
//      }else{
//         console.log("Error");
//     }
    res.redirect("/perfil_trabajo");
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


module.exports = perfiltra;