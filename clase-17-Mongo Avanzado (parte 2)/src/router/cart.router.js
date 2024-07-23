import { Router } from "express";
import cartDao from "../dao/cart.dao.js";
import { checkProductAndCart } from "../middlewares/checkProductAndCart.middleware.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const cart = await cartDao.create();

    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.get("/:cid", async (req, res) => {
  try {
    const { cid } = req.params;

    const cart = await cartDao.getById(cid);
    if (!cart) return res.status(404).json({ status: "error", msg: "Carrito no encontrado" });

    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.post("/:cid/product/:pid", checkProductAndCart, async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const cart = await cartDao.addProductToCart(cid, pid);

    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.delete("/:cid/product/:pid", checkProductAndCart, async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await cartDao.deleteProductInCart(cid, pid);
    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.put("/:cid/product/:pid", checkProductAndCart, async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const cart = await cartDao.updateQuantityProductInCart(cid, pid, quantity);
    res.status(201).json({ status: "ok", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

router.delete("/:cid", async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await cartDao.getById(cid);
    if (!cart) return res.status(404).json({ status: "error", msg: "Carrito no encontrado" });

    const cartResponse = await cartDao.deleteAllProductsInCart(cid);

    res.status(201).json({ status: "ok", cart: cartResponse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
});

export default router;
