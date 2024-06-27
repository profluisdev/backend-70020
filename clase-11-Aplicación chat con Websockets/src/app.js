import express from "express";
import handlebars from "express-handlebars";
import _dirname from "./dirname.js";
import viewRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", _dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", viewRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

const io = new Server(httpServer);

let messages = [];

io.on("connection", (socket) => {
    console.log(`Nuevo usuario con el id: ${socket.id} conectado`);

    socket.on("newUser", (data) => {
        socket.broadcast.emit("newUser", data);
    })

    socket.on("message", (data) => {
      // Recibimos el mensaje del usuario
      messages.push(data);
      // Enviar a todos los usuarios los mensajes 
      io.emit("messageLog", messages);
    })
})