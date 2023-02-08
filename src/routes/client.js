const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getClient,editClient,getClienteByCel,createClient,deleteClient}= require('../controller/client.controller');

//esta es el modelo para user, aqui encontrara el nombre de los metodos para el crud, 
//los cuales se encuentran en el archivo user.controller.js (dento de controller)

//retorna los clientes
router.get('/',getClient);

//retorna un cliente por cedula
router.get('/:celular',getClienteByCel);

//crea un cliente nuevo
router.post('/', createClient);

//elimina un cliente
router.delete('/:celular', deleteClient); 

//edito un cliente
router.put('/:celular', editClient);


module.exports= router;