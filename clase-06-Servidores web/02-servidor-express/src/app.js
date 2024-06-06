import express from "express";

// Inicializamos express y la variable app contendrá todas las funcionalidades de express
const app = express();
/* 
urlencoded nos permite que el servidor pueda interpretar mejor los datos complejos que viajen desde la url, 
y mapearlos correctamente en el req.query.
Es importante destacar que siempre tiene que ir por encima de las rutas, ya que es un middleware (ya veremos que es 
más adelante en el curso) que se ejecuta para procesar la información de los endpoints.
*/
app.use(express.urlencoded({extended: true}))

// Apertura de un "Endpoint", en el cual el cliente va a realizar una petición http, en este caso una petición get
app.get("/saludo", (req, res) => {
  // Respuesta de nuestro servidor al cliente
  console.log("Se pidió una petición GET en este endpoint");
  res.send("Hola desde mi primer servidor con express");
});

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color:blue;">¡Bienvenido a mi primer servidor express!</h1>`);
});

app.get("/usuario", (req, res) => {
  const user = {
    name: "Juan",
    age: 33,
    email: "jp@mail.com",
  };
  res.send(user);
});

// request params
// Peticiones GET con un parámetro
app.get("/parametro/:dato", (req, res) => {
  const parametro = req.params.dato;

  res.send(`El parámetro recibido es: ${parametro}`);
});

// Peticiones GET con dos parámetros
app.get("/parametros/:nombre/:apellido", (req, res) => {
  const nombre = req.params.nombre;
  const apellido = req.params.apellido;

  res.send(`Bienvenido ${nombre} ${apellido}`);
});

app.get("/suma/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;

  const suma = Number(num1) + Number(num2);

  res.send(`El resultado de la suma es ${suma}`);
});

const usuarios = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54 },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33 },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21 },
];

app.get("/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  // Obtenemos el parámetro enviado por el cliente
  const { id } = req.params;
  //Buscamos el usuario en el array
  const usuario = usuarios.find((user) => user.id === Number(id));
  // Verificamos si el usuario existe, si no existe retornamos una respuesta con un error
  if(!usuario) return res.send(`No existe el usuario con el id ${id}`);

  // En caso que el usuario exista, devolvemos una respuesta con el usuario indicado
  res.send(usuario);
});

// req.query

app.get("/queries", (req, res) => {

  const consulta = req.query;
  
  res.send(consulta);
})

app.get("/queries2", (req, res) => {

  const { nombre, apellido, pais } = req.query;
  const datos = {
    nombre,
    apellido,
    pais
  };

  if(Object.values(datos).includes(undefined)) {
    return res.send("Debe ingresar todos los datos, nombre, apellido y país")
  }
  
  res.send(`Persona ${nombre} ${apellido} y vive en ${pais}`);
})

const usuarios2 = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54, genero: "M" },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33, genero: "M" },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21, genero: "M" },
  { id: 4, nombre: "Maria", apellido: "Diaz", edad: 26, genero: "F" },
  { id: 5, nombre: "Emilia", apellido: "Gomez", edad: 36, genero: "F" },
  { id: 6, nombre: "Julia", apellido: "Lopez", edad: 44, genero: "F" },
];

app.get("/usuarios2", (req, res) => {
  // Obtenemos la query enviada por el cliente 
  const { genero } = req.query;
  // Verificamos si el cliente envía la query y si se envía en el formato correcto, sino le retornamos todos los usuarios sin filtrar
  if(!genero || ( genero !== "M" && genero !== "F")) return res.send(usuarios2);
  // En caso que la query llegue bien respondemos al usuario con los usuarios filtrados
  const usuariosFiltrados = usuarios2.filter( usuario => usuario.genero === genero);
  res.send(usuariosFiltrados);
})

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
