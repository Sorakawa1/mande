// Se encargara de almacenar las rutas principales
const express = require('express');
const router1 = express.Router(); //Se definen las rutas del servidor

//Portal principal
router1.get('/', (req, res, next) => {
    res.render('principal.ejs');
})

router1.get('/inicio', (req, res, next) => {
    res.render('principal.ejs');
})

//Cliente y trabajador logins
router1.get('/login_trabajador', (req, res, next) => {
    res.render('index_login_trabajador.ejs');
})

router1.get('/login_cliente', (req, res, next) => {
    res.render('index_login_clientes.ejs');
})

router1.post('/login_cliente', async(req, res, next) => {
   
    const clientes= await getDataFromAPI(req.body.email);
    const key = 'error';
    var hasKey = (clientes[key] !== undefined);

    if(hasKey || !req.body.email|| !req.body.password){
        console.log('datos incorrectos');
        res.render('index_login_clientes.ejs');
    }
    else
    { 
        console.log('entro en el else');
        const hash= (req.body.password);
        console.log(hash);
        const contrasena=(clientes[0].contrasena).toString().trim();
        const rehash= await bcrypt.compare(hash,contrasena);
        console.log(rehash);

        if(rehash)
        {
           
            const hash = await bcrypt.hash('1234',8);
            const rehash= await bcrypt.compare('1234','h');
            console.log(hash + " /n " + rehash);
            for (i=0; i<clientes.length; i++){
                console.log(clientes[i].nombre);
            }
            res.render('perfil_cliente.ejs');
        }
        else    {
            console.log('datos incorrectos');
            res.render('index_login_clientes.ejs');
        }
    }
    
})

async function getDataFromAPI(celtrabajador) {
    try {
        const url= 'http://localhost:5000/api/client/'+celtrabajador
        const response = await fetch(url);
        const data = await response.json();
        
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}



module.exports = router1;