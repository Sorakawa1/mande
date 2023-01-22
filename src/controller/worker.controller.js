const { request } = require('express');
const {Pool}= require('pg');

//import json example
const pool= require('./db_pool_connect');

//funciones para el crud de trabajadores
const getWorker = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from usuario WHERE es_cliente=false AND usuario_activo=true');
        console.log(rest.rows);
        res.send(rest.rows);
    }
    catch(e){
        console.log(e);
    }  
}

const getWorkerByCel = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from TRABAJADORVIEW WHERE celular=$1', [req.params.celular]);
        if(rest.rows.length==0){
            res.status(404).json({error:'no se encontro el Worker'});
        }
        else{
            res.send(rest.rows);
        }
    }
    catch(e){
        ('ERROR DE CELULAR').concat(console.log(e));
    }

}

const updateWorker = async(req,res) => {
    const celular = req.params.celular;
    const {correo } = req.body;
    //console.log(correo, celular);
    const response = await pool.query('UPDATE usuario SET correo=$1 WHERE celular=$2', [
        correo,
        celular
    ]);
    console.log(response);
    res.json('Usuario actualizado correctamente');
    
}

module.exports = { getWorker, getWorkerByCel, updateWorker };
