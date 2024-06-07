import fs from "fs";

const path = "./src/managers/data/products.json";

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

    return products;
  } catch (error) {
    console.log(`${error}`);
  }
};

// Leer un product por id

const getProductById = async (id) => {
  try {
    await getProducts();

    const product = products.find((p) => p.id === id);

    return product;
  } catch (error) {
    console.log(`${error}`);
  }
};

// Actualizar un product

const updateProduct = async (id, productData) => {
  try {
    await getProducts();

    const index = products.findIndex((p) => p.id === id);
    products[index] = {
      ...products[index],
      ...productData,
    };

    await fs.promises.writeFile(path, JSON.stringify(products));

    return products[index];
  } catch (error) {
    console.log(`${error}`);
  }
};

// Eliminar un product

const deleteProduct = async (id) => {
  try {
    await getProducts();

    products = products.filter((p) => p.id !== id);
    await fs.promises.writeFile(path, JSON.stringify(products));
    return products;
  } catch (error) {
    console.log(`${error}`);
  }
};

export default {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
