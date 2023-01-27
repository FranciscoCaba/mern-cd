const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json(), express.urlencoded({ extended: true }))

app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto ",PORT))