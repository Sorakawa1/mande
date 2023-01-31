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
        const rest= await pool.query('SELECT * from usuario WHERE celular=$1', [req.params.celular]);
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
    try
    { 
        const rest= await pool.query(`UPDATE usuario set nombre= COALESCE($1, nombre), apellido= 
        COALESCE($2, apellido), correo= COALESCE($3, correo), contrasena= COALESCE($4, contrasena), 
        ubicacion= COALESCE($5, ubicacion) WHERE celular=$6`, [req.body.nombre,req.body.apellido,
            req.body.correo,req.body.contrasena,
            req.body.ubicacion,req.params.celular]);
        res.send({message: 'Trabajador editado exitosamente'});
        //res.status(200).json({message: 'Cliente editado exitosamente'});
    }
    catch(e){
        ('ERROR DE CELULAR').concat(console.log(e));
    }
    
}

//funcion que crea un trabajador, inserta los valores en la tabla usuario y luego en la tabla trabajador.
const createWorker= async(req,res) => {
    try{ 
        await pool.query('BEGIN');
        if( Object.keys(req.body).length < 8 || req.body===null){
            res.status(404).json({error:'no hay datos suficientes para crear el trabajador' });
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
        if( es_cliente==='false'){

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

        } else {

            res.status(404).json({error:'No se ha especificado que el usuario es un trabajador'});

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
        res.status(500).json({error: 'Error al insertar el trabajador, ya existe o dato invalido'});
        console.log(e);
    }
}

const deleteWorker = async(req,res) => {
    try{ 
        const inactivo=Boolean(false);
        const rest= await pool.query('UPDATE usuario set usuario_activo=$1 WHERE celular=$2 ', [inactivo,req.params.celular]);
        res.send({message: 'Trabajador elimando exitosamente'});
        //res.status(200).json({message: 'Cliente eliminado exitosamente' +req.params.celular+inactivo});
    }
    catch(e){
        res.status(500).json({error: 'Error al eliminar el trabajador'});
        ('ERROR DE CELULAR').concat(console.log(e));}
    }   


module.exports = {getWorker, getWorkerByCel, updateWorker, createWorker, deleteWorker };
