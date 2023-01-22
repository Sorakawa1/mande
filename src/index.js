//CODIGO DE SERVIDOR
const express = require('express');
const engine = require('ejs-mate');
const pathh = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const auth = require('basic-auth');
const path = require('path');

/* 
//OPCIONES 
//app.set('views', pathh.join(__dirname, 'views')); //ruta de la carpeta de vistas
app.engine('motor-ejs', engine); //usar motor de plantilla
app.set('view engine', 'motor-ejs');  
app.set('port', process.env.PORT || 3000)
 
//middlewares - Son funciones antes de pasar a las rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json()) // para procesar datos enviados en formato JSON
app.use(bodyParser.urlencoded({ extended: true })) // para procesar datos enviados en formato URL-encoded

app.use('/', require('./routes/princ'))

//autenticacion simple
app.use((req, res, next) => {
    const user = (req.headers.user);
    const pass = (req.headers.pass);
    

    if (user === undefined || user !== 'mande' || pass !== 'mande') {
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
      res.end('Unauthorized'+auth(req));
    } else {
      next();
    }
  });
/


//Rutas
app.use('/api/client',require('./routes/client'));
*/
const indexRouter = require('./routes/index');

//setting
app.set('port',process.env.PORT || 5000);
app.set('json spaces', 2);  //to format the json    
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(morgan('ini'));
app.use(express.urlencoded({extended: false}));   //to understand the data that the user sends
app.use(express.json());
app.use(bodyParser.json()) // para procesar datos enviados en formato JSON
app.use(bodyParser.urlencoded({ extended: true })) // para procesar datos enviados en formato URL-encoded



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
app.use(require('./routes/index'));
app.use('/api/client',require('./routes/client'));
app.use('/api/apiexterna', require('./routes/apiexterna'));
app.use('/', indexRouter);
app.use('/api/worker',require('./routes/worker'));

//EMPIEZA EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Si funciona', app.get('port'));
})