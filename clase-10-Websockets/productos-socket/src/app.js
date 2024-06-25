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

let products = [];

const io = new Server(httpServer);

// on: escuchar
// emit: enviar

io.on("connection", (socket) => {
  console.log(`Nuevo cliente conectado con el id ${socket.id}`);
  
  socket.on("product", (data) => {
      products.push(data);

      io.emit("products", products)
  })

  socket.on("changeStock", (data) => {
      products = data;
      io.emit("products", products);
  })

});

