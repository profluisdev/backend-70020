import express from "express";
import __dirname from "./dirname.js";
import viewRoutes from "./routes/views.routes.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";


const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de handlebars
app.engine("handlebars", handlebars.engine()); // Inicia el motor del la plantilla
app.set("views", __dirname + "/views"); // Indicamos que ruta se encuentras las vistas
app.set("view engine", "handlebars"); // Indicamos con que motor vamos a utilizar las vistas

app.use(express.static("public"));

app.use("/", viewRoutes )


const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});


// Configuración de websocket

const io = new Server(httpServer);

// on: escuchar
// emit: enviar

io.on("connection", (socket) => {
  console.log(`Nuevo cliente conectado con el id ${socket.id}`);
  

  socket.on("message", (data) => {
      console.log(data);
  })
  
  // Mensaje para un socket individual, solo lo recibe un cliente
  socket.emit("socket-individual", "Mensaje individual");
  
  // Mensaje para todos menos el socket actual
  socket.broadcast.emit("socket-excluye-actual", "Este mensaje lo tienen que ver todos menos el actual");
  
  // Mensaje para todos
  io.emit("socket-todos", "Este mensaje lo deben ver todos los socket");
})

