const express = require('express') //La forma en la que requerimos express
const app = express(); //express es un objeto guardado en una constante

//app.get() indica que express recibirá una petición
app.get('/', (req, res) => {
    res.send('Hello world')
})
// Mandamos el server en el puerto 3000 con el método listen()
app.listen(3000, () => {
    console.log('Server on port 3000');
})
