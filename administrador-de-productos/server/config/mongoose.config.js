const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/admin_productos", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then( () => console.log("Conexion establecida con base de datos") )
    .catch( err => console.log("Ha ocurrido un error.\n", err) )