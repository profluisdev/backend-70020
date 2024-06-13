import express from "express";
import productRouter from "./router/product.router.js";
import cartRouter from "./router/cart.router.js"

const PORT = 8080;
const app = express();

app.use(express.json()); // Este middleware nos permite obtener archivos json
app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));

app.use("/api", productRouter);
app.use("/api", cartRouter);



app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
