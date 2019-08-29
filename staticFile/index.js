const express = require('express');
const morgan = require('morgan'); 
const app = express(); 


// Middlewares
/* El middleware static se encarga de enviar archivos al Frontend, tales como html, css y javascript
 Estos archivos son estaticos porque no cambian
 static viene dentro de express, no hay que instalarlo */

app.use(morgan('dev'))
app.use(express.json());


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
// A static se le especifica el nombre de una carpeta
app.use(express.static('public')) // Se escribe al final porque tendrá que pasar por todas las rutas


app.listen(5000, () => {
    console.log('Server on port 3000');
})

