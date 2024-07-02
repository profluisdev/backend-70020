
// Crear la base datos 
use("clase12")

// Creamos la colección de usuarios 
db.createCollection("usuarios")

// insertamos una usuario en la colección 
db.usuarios.insertOne({nombre: "Juan", apellido: "Perez", edad: 33})