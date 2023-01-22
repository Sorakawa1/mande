const { request } = require('express');
const {Pool}= require('pg');

//import json example
const movies= require('../sample.json');
const pool= require('./db_pool_connect');


//funciones para el crud de clientes
const getClient = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from usuario');
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
        await pool.query('BEGIN');
        if( Object.keys(req.body).length < 8 || req.body===null){
            res.status(404).json({error:'no hay datos suficientes para crear el cliente' });
            return;
        }
        const celular = req.body.celular;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const contrasena = req.body.contrasena;
        const ubicacion = req.body.ubicacion;
        const doc_ruta = req.body.doc_ruta;
        const es_cliente = req.body.es_cliente;
        const cedula = req.body.cedula;
        const foto= req.body.foto;
        
        if(celular === undefined){
            res.status(404).json({error:'No se ha especificado el celular' + "prueba"+req.body.celular});
            return;
        }
        if( es_cliente.toString().toLowerCase()==='true'){

            //insertar en la tabla usuario
            const text= 'INSERT INTO usuario(celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,es_cliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
            const values= [celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,es_cliente];
            await pool.query(text,values);
            

            //insertar en la tabla cliente
            const text2= 'INSERT INTO cliente(cedula_cliente,foto,celular_cliente) VALUES ($1,$2,$3)';
            const values2= [cedula,foto,celular];
            await pool.query(text2,values2);

            res.send({message: 'Cliente creado exitosamente'});
            await pool.query('COMMIT');

        } else {

            //insertar en la tabla usuario
            const text= 'INSERT INTO usuario(celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,es_cliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
            const values= [celular,nombre,apellido,correo,contrasena,ubicacion,doc_ruta,es_cliente];
            await pool.query(text,values);
            

            //insertar en la tabla trabajador
            const text2= 'INSERT INTO trabajador(cedula_trabajador,foto,celular_trabajador) VALUES ($1,$2,$3)';
            const values2= [cedula,foto,celular];
            await pool.query(text2,values2);

            res.send({message: 'trabajador creado exitosamente'});
            await pool.query('COMMIT');
            
        }
    }
    catch(e){
        await pool.query('ROLLBACK');
        res.status(500).json({error: 'Error al insertar el cliente, ya existe o dato invalido'});
        console.log(e);
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

module.exports = { getClient, editClient, getClienteByCel,createClient };