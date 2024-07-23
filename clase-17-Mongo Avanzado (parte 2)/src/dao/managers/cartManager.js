import fs from "fs";
import { v4 as uuid } from "uuid";

let carts = [];
const path = "./src/managers/data/carts.json";

const getCars = async () => {
  const cartsJson = await fs.promises.readFile(path, "utf-8");
  carts = JSON.parse(cartsJson) || [];

  return carts;
};

const createCart = async () => {
  await getCars();
  const newCart = {
    id: uuid(),
    products: [],
  };

  carts.push(newCart);

  await fs.promises.writeFile(path, JSON.stringify(carts));

  return newCart;
};

const getCartById = async (cid) => {
  await getCars();
  const cart = carts.find((c) => c.id === cid);
  return cart;
};

const addProductToCart = async (cid, pid) => {
  await getCars();
  const cart = await getCartById(cid);
  // Modificar para chequear que el producto existe y aumentar la quantity
  const product = {
    product: pid,
    quantity: 1
  }

  cart.products.push(product);
  await fs.promises.writeFile(path, JSON.stringify(carts));
  return cart
}

export default {
  createCart,
  getCartById,
  addProductToCart
};

