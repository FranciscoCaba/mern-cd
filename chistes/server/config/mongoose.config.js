const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/chistes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(()=>console.log("Conexion lograda con base de datos"))
    .catch((err)=>console.log("Un error ha ocurrido al tratar de conectar con la base de datos.\n",err))