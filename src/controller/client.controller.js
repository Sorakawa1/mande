const { request } = require('express');
const {Pool}= require('pg');

//import json example
const movies= require('../sample.json');
const pool= require('./db_pool_connect');


//funciones para el crud de clientes
const getClient = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from clienteview');
        console.log(rest.rows);
        res.send(rest.rows.concat(movies));
    }
    catch(e){
        console.log(e);
    }  
}

const getClienteByCel = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from clienteview WHERE celular=$1', [req.params.celular]);
        if(rest.rows.length==0){
            res.status(404).json({error:'no se encontro el cliente'});
        }
        else{
            res.send(rest.rows);
        }
    }
    catch(e){
        ('ERROR DE CELULAR').concat(console.log(e));
    }

}

const createClient = async(req,res) => {
    try{ 
        const{celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,escliente,cedula,foto}=req.body;

        if(req.body.length < 8 || req.body==null){
            res.status(404).json({error:'no hay datos para crear el cliente'});
        }

        if(escliente){
            const text= 'BEGIN INSERT INTO usuarios (celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,escliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
            const values= [celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,escliente];
            const rest= await pool.query(text,values);
            res.send(rest.rows);
        }
      
    }
    catch(e){
        ('ERROR DE CELULAR').concat(console.log(e));
    }


}

const editClient = async(req,res) => {
    const text= 'update usuarios set nombrre=$1, celular=$2 where nombrre=$3';
    const values= ['jose','1234','cristian'];
    try{
        const rest= await pool.query(text,values);
        console.log();
        pool.end();
    }
    catch(e){
        console.log(e);
    }   
}

module.exports = { getClient, editClient, getClienteByCel };