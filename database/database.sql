-- Verificar si la base de datos "mande" existe
SELECT 1 FROM pg_database WHERE datname = 'mande';

-- Eliminar la base de datos "mande" si existe
DROP DATABASE IF EXISTS mande;

CREATE DATABASE mande;


CREATE TABLE usuario
(   celular character(10) PRIMARY KEY,
    nombre character(100),
    apellido character(100),
    correo character(100),
    contraseña character(100),
    ubicacion character(100), 
    doc_ruta varchar NOT NULL,
    es_cliente boolean,
    usuario_activo boolean DEFAULT true
);

CREATE TABLE cliente 
(  cedula_cliente int PRIMARY KEY,
   foto varchar,
   celular_cliente character(10) NOT NULL UNIQUE,
   CONSTRAINT fk_cliente_usuario
   FOREIGN KEY (celular_cliente) 
   REFERENCES usuario(celular)
);

CREATE TABLE trabajador
(   cedula_trabajador int PRIMARY KEY,
    foto varchar NOT NULL,
    calificacion int,
    celular_trabajador character(10) NOT NULL UNIQUE,
    CONSTRAINT fk_trabajador_usuario
    FOREIGN KEY (celular_trabajador) 
    REFERENCES usuario(celular)
);

CREATE TABLE labor 
(   labor_id serial PRIMARY KEY,
    nombre character(100) NOT NULL UNIQUE,
    tipo_unidad char(100),
    descripcion text
);

CREATE TABLE ofrece
(   ofrece_id serial PRIMARY KEY,
    tarifa numeric,
    trabajador_id int NOT NULL,
    CONSTRAINT fk_ofrece_trabajador
    FOREIGN KEY (trabajador_id)
    REFERENCES trabajador(cedula_trabajador),
    labor_id serial NOT NULL,
    CONSTRAINT fk_ofrece_labor
    FOREIGN KEY (labor_id)
    REFERENCES labor(labor_id)	
);

CREATE TABLE metodo_pago
( metodo_id serial PRIMARY KEY,
  descripcion text NOT NULL
);

CREATE TABLE cliente_metodo_pago
( cliente_id int,
  CONSTRAINT fk_cliente_metodo
  FOREIGN KEY (cliente_id)
  REFERENCES cliente(cedula_cliente),
  metodo_id serial,
  CONSTRAINT fk_metodo_cliente
  FOREIGN KEY (metodo_id)
  REFERENCES metodo_pago(metodo_id)
);

CREATE TABLE pago 
(  pago_id serial PRIMARY KEY,
   fecha timestamp,
   trabajador_id int,
   CONSTRAINT fk_pago_trabajador 
   FOREIGN KEY (trabajador_id) 
   REFERENCES trabajador(cedula_trabajador),
   metodo_pago serial,
   CONSTRAINT fk_metodo_pago_cliente
   FOREIGN KEY (metodo_pago)
   REFERENCES metodo_pago(metodo_id),
   pagado boolean DEFAULT false
);

CREATE TABLE servicio
(   servicio_id serial PRIMARY KEY,
    fecha_solicitud timestamp,
    fecha_terminado timestamp,
    total numeric,
    costo numeric,
    pago serial,
    CONSTRAINT fk_servicio_pago
    FOREIGN KEY (pago)
    REFERENCES pago(pago_id),
    cliente_id int NOT NULL,
    CONSTRAINT fk_servicio_cliente
    FOREIGN KEY (cliente_id)
    REFERENCES cliente(cedula_cliente),
    ofrece_id serial NOT NULL,
    CONSTRAINT fk_servicio_ofrece
    FOREIGN KEY (ofrece_id)
    REFERENCES ofrece(ofrece_id),	
    calificacion_servicio int
);


INSERT INTO usuario VALUES 
('3167895779',
 'Valeria',
 'Suarez', 
 'vals@gmailcom',
 '123',
 'av 2 n',
 'file:///C:/Users/valeria/Downloads/Segundo%20examen%20parcia.pdf',
 true);

INSERT INTO usuario VALUES 
('3226256925',
 'Andres',
 'Perez', 
 'and@gmailcom',
 '568',
 'av roosevelt',
 'file:///C:/Users/valeria/Downloads/Calificaciones%20DSI%20Grupo%2080%202022-2%20-%20Hojas%20de%20ca%CC%81lculo%20de%20Google.pdf',
 false);

INSERT INTO usuario VALUES 
('3153672570',
 'Cesar',
 'Molina', 
 'cm@gmailcom',
 'cali202',
 'crre 26',
 'file:///C:/Users/vSI%20Grupo%2080%202022.pdf',
 false);

INSERT INTO cliente VALUES 
(1006052790,
 'C:\Users\valeria\OneDrive\Imágenes\_DSC0282.jpg',
 '3167895779'
 );

INSERT INTO trabajador VALUES 
(31941307,
 'C:\Users\valeria\OneDrive\Imágenes\_DSC0282.jpg',
 5,
 '3226256925'
 );

INSERT INTO trabajador VALUES 
(6027584,
 'C:\Users\valeria\OneDrive\Imágenes\_DSC0282.jpg',
 4,
 '3153672570'
 );

 INSERT INTO labor VALUES
(   1,
    'plomero',
    'se destapan cañerias'
); 

INSERT INTO labor VALUES
(   2,
    'profesor de ingles'
); 

INSERT INTO labor VALUES
(   3,
    'paseador de perror ',
    'se cobra por paseada, no mayor a 20 minutos'
); 

INSERT INTO ofrece VALUES
(   1,
    20000,
    31941307,
    2
);

INSERT INTO metodo_pago VALUES
( 1,
  'TARJETA DE CREDITO'
);

INSERT INTO metodo_pago VALUES
( 2,
  'TARJETA DEBITO'
);

INSERT INTO pago VALUES
(  1,
   CURRENT_TIMESTAMP,
   31941307,
   2
);

INSERT INTO servicio VALUES
(   1,
    '2023-01-17 15:33:15',
    '2023-01-18 10:33:15',
    100000,
    20000,
    1,
    1006052790,
    1,	
    4
);

INSERT INTO cliente_metodo_pago VALUES
( 1006052790,
  2
);

create view CLIENTEVIEW as 
Select nombre,celular, contraseña, usuario_activo FROM USUARIO WHERE es_cliente= true;

create view TRABAJADORVIEW as 
Select nombre,celular, contraseña, usuario_activo FROM USUARIO WHERE es_cliente != true;


select * from TRABAJADORview;