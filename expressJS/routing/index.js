const express = require('express') 
const app = express(); 
app.use(express.json()); // Este método hace que express logre entender  e imprimir los formatos json

// all() obliga a que antes de cada ruta tiene que pasar por sus métodos y cumplirlos
app.all('/user', (req, res, next) => {
    console.log('Por aquí pasó');
    // res.send('finish') // Hasta aquí termina all() y el server no hace nada más
    next(); //con next() le decimos al server que continue con la siguiente tarea, la de abajo.
    
})



app.get('/user', (req, res) => {
    //Se pueden utilizar otros métodos en vez de send, asi como JSON
    res.json({
        username: "Julio",
        lastname: "Denis"
    })
})
// Los métodos http no funcionan entre sí mismos, no se reconocen
// Para urls dinámicas se usan : seguido de la variable a la que se le asignará el parámetro
app.post('/user/:id', (req, res) => {
    console.log(req.body); // Recibe los datos del cliente
    console.log(req.params); // Sirve para recibir datos desde un parametro de la url
    
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

//Para evitar reiniciar a cada rato el server se instala el módulo nodemon
// PARA TESTEAR RUTAS QUE NO SEAN DEL MÉTODO GET SE UTILIZA POSTMAN