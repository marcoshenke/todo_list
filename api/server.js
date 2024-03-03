require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose
  .connect(process.env.CONNECTIONSTRING) // CONNECTIONSTRING está vindo de um arquivo .env que nao esta sendo enviado para o repositório
  .then(() => {
    console.log('Conectado a base de dados')
    app.emit('dbOk')
  })
  .catch((e) => console.error(e))

// MIDDLEWARES
app.use(bodyParser.json())

app.on('dbOk', () => {
  app.listen(9000, () => {
    console.log(`Servidor rodando na porta 9000`)
  })
})
