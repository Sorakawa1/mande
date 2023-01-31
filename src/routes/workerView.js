const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getWorkerComplete,getWorkerCompleteByCel}= require('../controller/workerView.controller');

//retorna los trabajadores
router.get('/',getWorkerComplete);

//retorna un trabajador por celular
router.get('/:celular',getWorkerCompleteByCel);



module.exports= router;