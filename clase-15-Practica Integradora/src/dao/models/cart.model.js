import mongoose from "mongoose";

const cartCollection = "carts"; // Nombre de la colección

// Modelo de Schema
const cartSchema = new mongoose.Schema({
  products: {
    type: Array,
    default: [],
  },
});

// Exportamos el modelo que vamos a utilizar
export const cartModel = mongoose.model(cartCollection, cartSchema);

