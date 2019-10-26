const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // 
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors())

/*
    CONFIG bodyParser
*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/', (req, res) => {
    res.send({ message: 'CRUD API NodeJS' })
});

app.use('*', (req, res) => res.send({ message: 'API não encontrada' }))

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}!`))