import fs from "fs";

const path = "./data/products.json";

let products = [];

// Agregar un product

const addProduct = async (product) => {
  try {
    const { title, description, price, thumbnail, code, stock } = product;

    const newProduct = {
      id: products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    products.push(newProduct);

    await fs.promises.writeFile(path, JSON.stringify(products));
    console.log("Producto agregado con éxito");
  } catch (error) {
    console.log(`${error}`);
  }
};

// Leer products
const getProducts = async () => {
  try {
    const fileJson = await fs.promises.readFile(path, "utf-8");
    const parseFile = JSON.parse(fileJson);
    products = parseFile || [];
    console.log(products);
    
  } catch (error) {
    console.log(`${error}`);
    
  }
}

// Leer un product por id

// Actualizar un product

// Eliminar un product


export default {
  addProduct,
  getProducts
}