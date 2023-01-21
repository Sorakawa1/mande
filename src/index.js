//CODIGO DE SERVIDOR
const express = require('express');
const engine = require('ejs-mate');
const pathh = require('path');
const app = express();
const morgan = require('morgan');

//OPCIONES 
app.set('views', pathh.join(__dirname, 'views')); //ruta de la carpeta de vistas
app.engine('motor-ejs', engine); //usar motor de plantilla
app.set('view engine', 'motor-ejs');  
app.set('port', process.env.PORT || 5000)
 
//middlewares - Son funciones antes de pasar a las rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', require('./routes/princ'))


//EMPIEZA EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Si funciona', app.get('port'));
})