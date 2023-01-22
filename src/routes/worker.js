const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getWorker,getWorkerByCel, updateWorker}= require('../controller/worker.controller');

//retorna los trabajadores
router.get('/',getWorker);

//retorna un trabajador por celular
router.get('/:celular',getWorkerByCel);

//actualiza un trabajador
router.put('/:celular', updateWorker);

module.exports= router;