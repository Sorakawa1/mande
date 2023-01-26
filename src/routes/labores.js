const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getlabor,editlabor,getlaboreByid,createlabor,deletelabor}= require('../controller/labor.controller');

//esta es el modelo para user, aqui encontrara el nombre de los metodos para el crud, 
//los cuales se encuentran en el archivo user.controller.js (dento de controller)

//retorna los clientes
router.get('/',getlabor);

//retorna un labore por cedula
router.get('/:celular',getlaborByid);

//crea un labore nuevo
router.post('/', createlabor);

//elimina un labore
router.delete('/:celular', deletelabor); 

//edito un labore
router.put('/:celular', editlabor);


module.exports= router;