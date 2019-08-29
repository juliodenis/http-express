const express = require('express');
const morgan = require('morgan'); 
const app = express(); 

// Settings
/* Los settings nos permiten establecer ciertas configuraciones como el puerto, o un motor de plantillas y para eso necesitamos un modulo llamado set() */
// En el primero parametro escribimos el nombre de la variable y en el segundo su valor.
app.set('appName', 'Express Tutorial')
// Express tiene nombre de variables reservados como podemos ver en la siguiente línea que indica el puerto del sever
app.set('port', 3000)
/* Los motores de plantillas nos ayudan a extender el html */
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = [{name: 'Julio'}, {name:'Fernanda'}, {name:'Michel'}, {name:'Julia'}];
    // con render le digo que pinte la pantalla con l archivo ejs que se le indica
    res.render('index.ejs', {people:data})
})
/* EJS vs HTML
    Con EJS puedo extender el html a gran escala
*/



// Middlewares
app.use(morgan('dev'))
app.use(express.json());

// Routes
app.get('/user', (req, res) => {
    res.json({
        username: "Julio",
        lastname: "Denis"
    })
})

app.post('/user/:id', (req, res) => {
    console.log(req.body); 
    console.log(req.params); 
    res.send('<h1> Post Request Received </h1>')
})

app.put('/user/:userid', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.userid} updated`);
    
})

app.delete('/user/:userID', (req, res) => {
    res.send(`User ${req.params.userID} has been deleted`)
    
})

app.use(express.static('public'))


app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    
    console.log('Server on port:', app.get('port'));
})

