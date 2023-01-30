// Se encargara de almacenar las rutas principales
const express = require('express');
const router1 = express.Router(); //Se definen las rutas del servidor
const bcrypt = require('bcrypt');

//Portal principal
router1.get('/', (req, res, next) => {
    res.render('principal.ejs');
})

router1.get('/inicio', (req, res, next) => {
    res.render('principal.ejs');
})

router1.get('/login_trabajador', (req, res, next) => {
    res.render('index_login_trabajador.ejs');
})


//Cliente y trabajador logins
router1.post('/login_trabajador', async(req, res, next) => {
    const url= 'http://localhost:5000/api/worker/'+req.body.email;
    const clientes= await getDataFromAPI(url);
    const key = 'error';
    var hasKey = (clientes[key] !== undefined);

    if(hasKey || !req.body.email|| !req.body.password){
        console.log('datos incorrectos');
        res.render('index_login_trabajador.ejs');
    }
    else
    { 
        const hash= (req.body.password);
        const contrasena=(clientes[0].contrasena).toString().trim();
        const rehash= await bcrypt.compare(hash,contrasena);

        if(rehash)
        {
            res.render('venta_principal_trabajo.ejs');
        }
        else    {
            console.log('datos incorrectos-contraseña-usuario');
            res.render('index_login_trabajador.ejs');
        }
    }
    
})


router1.get('/login_cliente', (req, res, next) => {
    res.render('index_login_clientes.ejs');
})

router1.post('/login_cliente', async(req, res, next) => {
   
    const url= 'http://localhost:5000/api/client/'+req.body.email;
    const clientes= await getDataFromAPI(url);
    const key = 'error';
    var hasKey = (clientes[key] !== undefined);

    if(hasKey || !req.body.email|| !req.body.password){
        console.log('datos incorrectos');
        res.render('index_login_clientes.ejs');
    }
    else
    { 
        const hash= (req.body.password);
        const contrasena=(clientes[0].contrasena).toString().trim();
        const rehash= await bcrypt.compare(hash,contrasena);

        if(rehash)
        {
            res.render('perfil_cliente.ejs');
        }
        else    {
            console.log('datos incorrectos-contraseña-usuario');
            res.render('index_login_clientes.ejs');
        }
    }
    
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



module.exports = router1;