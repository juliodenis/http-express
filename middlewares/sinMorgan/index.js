const express = require('express') 
const app = express(); 
/*------------------------------------------------------------------------------------------------------ */
// Middlewares
// Un middlewares es un manejador de peticiones, estas se ejecutan antes de que lleguen a su ruta original 
function logger(req, res, next) {
    //Si quiro ver la ruta solicitada en el servidor uso lo siguiente en el console.log()
    console.log(`Route received: ${req.protocol}://${req.get('host')} ${req.originalUrl}`);
    //protocol, me dice el protocolo de conexión, get('host') me dice el dominio (localhost) y originalUrl me dice la ruta o endpoint
    next();
    // Es similar all(), solo que all() continua con la petición que le sigue y no a las demás, con los middlewares si podemons continuar con las demás
}
// Llamando los middlewares
app.use(logger)
app.use(express.json());
/*------------------------------------------------------------------------------------------------------ */

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

