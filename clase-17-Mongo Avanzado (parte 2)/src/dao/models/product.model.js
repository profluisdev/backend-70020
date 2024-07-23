import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productCollection = "products"; // Nombre de la colección

// Modelo de Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // Dato requerido
  },
  description: {
    type: String,
  },
  code: {
    type: String,
    unique: true // Dato único
  },
  stock: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    default: 0, // Valor por defecto
  },
  thumbnail: {
    type: Array,
    default: [],
  },
});

productSchema.plugin(mongoosePaginate);

// Exportamos el modelo que vamos a utilizar
export const productModel = mongoose.model(productCollection, productSchema);
