const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Rotas
const candidatoRota = require('./rotas/candidatoRotas')
app.use('/candidato', candidatoRota)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})