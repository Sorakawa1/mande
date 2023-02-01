# Bienvenido a la documentación de MANDE
### Integrantes:
CRISTIAN GOMEZ GALVIS 2125858-2711

VALERIA SUAREZ IBARRA 2127184-2711

JUAN CAMILO PUENTES CEBALLOS 1842846-2711
***
### Despliegue contenedores:
El proyecto se desplegó de manera local, por lo que no se deja ningún Script de despliegue de contenedores.

***
# Informe final del proyecto.
### Resumen del proyecto:
El principal objetivo del curso y este proyecto es para que pudiésemos aplicar y profundizar todos los conceptos y metodologías relacionadas con las bases de datos relacionales que se nos impartieron durante el segundo semestre del año 2022 e inicios del 2023, entre las tantos conceptos que abarca el curso de base de datos se enfatizo en el diseño e implementación de una aplicación "MANDE" cuyo núcleo es una base de
datos relacional la cual emplea herramientas y funcionalidades de otras tanta tecnologías que rondan el mundo de las bases de datos.

### Objetivos específicos logrados:
● Diseñar y planear la ejecución del desarrollo en un grupo de desarrollo colaborativo.

● Diseñar una base de datos relacional para almacenar los datos del negocio de una
manera segura y eficiente.

● Implementar la base de datos.

● Diseñar e implementar una API REST para la comunicación de las aplicaciones con
la base de datos.

● Realizar un informe y una presentación del producto y el proceso de desarrollo.

***

### Tecnologías empleadas en el proyecto.
**NODE JS:** BACK-END.

**EXPRESS:** BACK-END.

**FRAMEWORK EJS:** BACK-END & FRONT-END.

**HTML Y CSS:** FRONT-END.

**BOOTSTRAP 5:** FRONT-END.

**POSTGRESQL Y PG:** DATABASE & CONEXIÓN A LA BASE DE DATOS.

**BCRYPT:** ENCRIPTAR CONTRASEÑAS. 

***
## MANUAL DE USUARIO
### INICIO:
**Primero**, debe clonar la rama del FRONT y también la del BACK en carpetas diferentes, ya que cada una se ejecuta sobre un puerto distinto.

**Segundo**, tener instalado POSTGRESQL 

**Tercero**, se deben instalar las dependencias registradas en el package.json junto al modulo de **npm**.
El comando para instalar componentes seria: 
**npm i dependencies**.

**Cuarto**, ejecutar el servidor, para este caso puede usar la instrucción: **npm run ini.**
En navegador entramos a la siguiente ruta: http://localhost:3007 para el Front y el  http://localhost:5000 para el BACK.

**Quinto**, instalar la base datos (el archivo psql que se encuentra dentro de la rama back o front (ambos son iguales)

**Sexto**, aparir de esto, ya podrá ingresar al sistema para hacer un registro o login, ademas podrá realizar consultar a la base de datos por medio de la API del back, ejemplo:

FRONT: http://localhost:3007/login_cliente = Los llevara directamente a la ventana de Login de clientes.

BACK: http://localhost:5000/routes/worker = Mostrara la información de los trabajadores registrados en la base de datos, pero sin interfaz grafica.

***
### DOCUMENTACIÓN ADICIONAL:
[Documentación](https://nodejs.org/en/docs/guides/) oficial de NodeJS: Conozca la guía base para entender la sintaxis y funcionamiento de NodeJS.

[Conoce](https://ejs.co/#docs) el framework EJS: Guía oficial de sintaxis y manejo de EJS.

***
