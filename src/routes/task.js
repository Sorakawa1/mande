const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getTask,getTaskByName, updateTask, createTask, deleteTask}= require('../controller/task.controller');

//retorna las labores
router.get('/',getTask);

//retorna una labor por nombre
router.get('/:nombre',getTaskByName);

//actualiza una labor
router.put('/:labor_id', updateTask);

//crea una labor nuevo
router.post('/', createTask);

//elimina una labor
router.delete('/:labor_id', deleteTask); 

module.exports= router;