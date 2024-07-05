import express from "express";
import routes from "./routes/index.js";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import viewsRoutes from "./routes/views.routes.js";
import __dirname from "./dirname.js";

// Inicializamos express y la variable app contendrá todas las funcionalidades de express
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars.engine()); // Inicia el motor del la plantilla
app.set("views", __dirname + "/views"); // Indicamos que ruta se encuentras las vistas
app.set("view engine", "handlebars"); // Indicamos con que motor vamos a utilizar las vistas
app.use(express.static("public"));

app.use("/api", routes);
app.use("/", viewsRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// Configuración de socket

export const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
});
