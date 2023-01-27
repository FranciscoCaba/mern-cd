const express = require('express')
const app = express()
const PORT = 8000

require('./server/config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }))

const rutas = require('./server/routes/chiste.routes')
rutas(app)

app.listen(PORT, () => console.log("Server conectado con exito en puerto "+PORT))