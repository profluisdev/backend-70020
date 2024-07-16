import productsRouter from "./product.router.js"
import cartsRouter from "./cart.router.js"
import { Router } from "express"

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);

export default router;