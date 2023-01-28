const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then( () => console.log("Conexion establecida con la base de datos"))
    .catch( err => console.log("Ha ocurrido un error en la conexion\n",err))