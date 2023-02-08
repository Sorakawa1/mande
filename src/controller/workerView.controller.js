const { request } = require('express');
const {Pool}= require('pg');

//import json example
const pool= require('./db_pool_connect');


const getWorkerComplete = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from TRABAJADORVIEW');
        console.log(rest.rows);
        res.send(rest.rows);
    }
    catch(e){
        console.log(e);
    }  
}

const getWorkerCompleteByCel = async(req,res) => {
    try{ 
        
        //const query= 'SELECT * from TRABAJADORVIEW WHERE nombre_labor like '+ '%'+ req.params.labores +'%';
        //console.log('resultadooo:'+query);
        const rest= await pool.query('SELECT * from TRABAJADORVIEW WHERE nombre_labor like $1', ['%'+ req.params.labores +'%']);
        //const rest= await pool.query(query);
        
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



module.exports = { getWorkerComplete,getWorkerCompleteByCel };
