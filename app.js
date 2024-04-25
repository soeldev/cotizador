require('dotenv').config();  // Busca la variable en .env (variables solo de desarollo)
const port = process.env.PORT || 3000; // Busca la variable en .env (variables solo de desarollo)
const aux = 2;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log('Aplicación escuchando en el puerto '+port);
});
