import { cartModel } from "./models/cart.model.js";


const getById = async (id) => {
  const cart = await cartModel.findById(id); // db.carts.findOne({_id: id})
  return cart;
}

const create = async (data) => {
  const cart = await cartModel.create(data) // db.carts.insertOne({data})
  return cart;
}

export default {
  getById,
  create
}