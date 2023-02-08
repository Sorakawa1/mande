const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getWorker,getWorkerByCel, updateWorker, createWorker, deleteWorker}= require('../controller/worker.controller');

//retorna los trabajadores
router.get('/',getWorker);

//retorna un trabajador por celular
router.get('/:celular',getWorkerByCel);

//actualiza un trabajador
router.put('/:celular', updateWorker);

//crea un trabajador nuevo
router.post('/', createWorker);

//elimina un trabajador
router.delete('/:celular', deleteWorker); 

module.exports= router;