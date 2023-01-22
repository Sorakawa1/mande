const { request } = require('express');
const {Pool}= require('pg');

//import json example
const movies= require('../sample.json');
const pool= require('./db_pool_connect');


//funciones para el crud de clientes:

//funcion que devuelve los clientes.
const getClient = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from usuario WHERE es_cliente=true AND usuario_activo=true');
        console.log(rest.rows);
        res.send(rest.rows);
    }
    catch(e){
        console.log(e);
    }  
}

//funcion que devuelve un cliente especifico al darle un numero de celular.
const getClienteByCel = async(req,res) => {
    try{ 
        const rest= await pool.query('SELECT * from clienteview WHERE celular=$1 AND usuario_activo=true', [req.params.celular]);
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

//funcion que crea un cliente, inserta los valores en la tabla usuario y luego en la tabla cliente.
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
        const es_cliente = req.body.es_cliente.toString().toLowerCase();
        const cedula = req.body.cedula;
        const foto= req.body.foto;
        
        if(celular === undefined){
            res.status(404).json({error:'No se ha especificado el celular'});
            return;
        }
        if( es_cliente==='true'){

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

            res.status(404).json({error:'No se ha especificado que el usuario es un cliente'});

            /*
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
            */
        }
    }
    catch(e){
        await pool.query('ROLLBACK');
        res.status(500).json({error: 'Error al insertar el cliente, ya existe o dato invalido'});
        console.log(e);
    }
}

//funcion que edita un cliente, edita los valores del nombre y contraseña en la tabla usuario 
const editClient = async(req,res) => {

    try
    { 
        const rest= await pool.query('UPDATE usuario set nombre=$1, contrasena= COALESCE($2, contrasena) WHERE celular=$3 ', [req.body.nombre,req.body.contrasena,req.params.celular]);
        res.send({message: 'Cliente editado exitosamente'});
        //res.status(200).json({message: 'Cliente editado exitosamente'});
    }
    catch(e){
        ('ERROR DE CELULAR').concat(console.log(e));
    }
}

const deleteClient = async(req,res) => {
    try{ 
        const inactivo=Boolean(false);
        const rest= await pool.query('UPDATE usuario set usuario_activo=$1 WHERE celular=$2 ', [inactivo,req.params.celular]);
        res.send({message: 'Cliente elimando exitosamente'});
        //res.status(200).json({message: 'Cliente eliminado exitosamente' +req.params.celular+inactivo});
    }
    catch(e){
        res.status(500).json({error: 'Error al eliminar el cliente'});
        ('ERROR DE CELULAR').concat(console.log(e));}
    }   

module.exports = { getClient, editClient, getClienteByCel,createClient,deleteClient };