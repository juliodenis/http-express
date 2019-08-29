const express = require('express');
const morgan = require('morgan'); //Es un middleware para node que valida el login con las rutas
const app = express(); 

// Middlewares

// Llamando los middlewares
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

app.listen(5000, () => {
    console.log('Server on port 3000');
})

