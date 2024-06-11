import express from "express";
import productManage from "./managers/productManage.js";

const PORT = 8080;
const app = express();

app.get("/products", async (req, res) => {
  const products = await productManage.getProducts();

  res.send(products);
});

app.get("/products/:pid", async (req, res) => {
try {
  const { pid } = req.params;
  const product = await productManage.getProductById(Number(pid));
  if (!product) return res.status(404).json({ status: "error", msg: "Producto no encontrado" });

  res.status(200).json({ status: "ok", product });
} catch (error) {
  console.log(error);
  res.status(500).json({status: "error", msg: "Error interno del servidor"});
}
});

app.get("/products/update/:pid", async (req, res) => {
  const { pid } = req.params;
  const { price, title } = req.query;
  const product = await productManage.updateProduct(Number(pid), { price: Number(price), title: title });

  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
