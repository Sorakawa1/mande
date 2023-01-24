const { request } = require('express');
const {Pool}= require('pg');

//import json example
const pool= require('./db_pool_connect');

//funciones para el crud de labores
const getTask = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from labor');
        console.log(rest.rows);
        res.send(rest.rows);
    }
    catch(e){
        console.log(e);
    }  
}

const getTaskByName = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from labor WHERE nombre=$1', [req.params.nombre]);
        
           // res.status(404).json({error:'no se encontro la labor'});
        
           console.log(rest.rows);
            res.send(rest.rows);
        
    }
    catch(e){
        ('ERROR DE NOMBRE').concat(console.log(e));
    }

}

const updateTask = async(req,res) => {
try
    { 
        const rest= await pool.query('UPDATE labor SET nombre=$1, descripcion=$2, tipo_unidad=$3 WHERE labor_id=$4 ',
         [req.body.nombre,req.body.descripcion,req.body.tipo_unidad,req.params.labor_id]);
        res.send({message: 'Labor editada exitosamente'});
        //res.status(200).json({message: 'Cliente editado exitosamente'});
    }
    catch(e){
        ('ERROR DE labor_id').concat(console.log(e));
    }
}

//funcion que crea una labor
const createTask= async(req,res) => {
    try{ 
        if( labor_id =! null){

            
        const labor_id = req.body.labor_id;
        const nombre = req.body.nombre;
        const tipo_unidad = req.body.tipo_unidad ;
        const descripcion = req.body.descripcion;

            //insertar en la tabla labor
            const text= 'INSERT INTO labor(labor_id, nombre, tipo_unidad, descripcion) VALUES ($1,$2,$3, $4)';
            const values= [labor_id, nombre, tipo_unidad, descripcion];
            await pool.query(text,values);
            
            res.send({message: 'labor creado exitosamente'});

        } else {

            res.status(404).json({error:'No se ha especificado la labor'});

            
        }
    }
    catch(e){
        res.status(500).json({error: 'Error al insertar la labor, ya existe o dato invalido'});
        console.log(e);
    }
}

const deleteTask = async(req,res) => {
    try{ 
        const rest= await pool.query('DELETE FROM labor WHERE labor_id=$1', [req.params.labor_id]);
        res.send({message: 'labor eliminada exitosamente'});
        //res.status(200).json({message: 'Cliente eliminado exitosamente' +req.params.celular+inactivo});
    }
    catch(e){
        res.status(500).json({error: 'Error al eliminar la labor'});
        ('ERROR DE labor').concat(console.log(e));}
    }   


module.exports = { getTask, getTaskByName, updateTask, createTask, deleteTask };
