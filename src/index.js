//CODIGO DE SERVIDOR
const express = require('express');
const engine = require('ejs-mate');
const pathh = require('path');
const morgan = require('morgan');
const app = express();

app.use(express.static('public'));
app.use(express.static('img'));
//OPCIONES 
app.set('port', process.env.PORT || 3004);
app.set('views', pathh.join(__dirname, 'views')); //ruta de la carpeta de vistas
app.engine('motor-ejs', engine); //usar motor de plantilla
app.engine('ejs', engine);
app.set('view engine', 'motor-ejs');  
app.set('view engine2', 'ejs');
 
//middlewares - Son funciones antes de pasar a las rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', require('./routes/princ'))

//EMPIEZA EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Si funciona', app.get('port'));
})