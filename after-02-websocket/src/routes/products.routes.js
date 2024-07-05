import { Router } from "express";
import productManager from "../productManager.js";
import { checkProductData } from "../middleware/checkProductData.middleware.js";

const router = Router();

router.get("/", async (req, res) => {
  const { limit } = req.query;
  try {
    const products = await productManager.getProducts(limit);

    res.status(200).json({ status: "success", products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const product = await productManager.getProductById(Number(pid));
    if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });

    res.status(200).json({ status: "success", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});

router.post("/", checkProductData, async (req, res) => {
  const body = req.body;
  try {
    const product = await productManager.addProduct(body);

    res.status(201).json({ status: "success", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});

router.put("/:pid", async (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  try {
    const product = await productManager.updateProduct(Number(pid), body);
    if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });

    res.status(200).json({ status: "success", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});

router.delete("/:pid", async (req, res) => {
  const { pid } = req.params;
  try {
    const product = await productManager.deleteProduct(Number(pid));
    if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });

    res.status(200).json({ status: "success", msg: `Producto con el id ${pid} eliminado` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
  }
});

export default router;
