
import productManage from "./productManage.js";

productManage.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC123",
  stock: 10,
});

productManage.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 200,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC124",
  stock: 10,
})

// productManage.getProducts();

const testProducts = async () => {
    // const product = await productManage.getProductById(2);
    // console.log(product);

    // const product = await productManage.updateProduct(1, { price: 300 })
    // console.log(product);

    const products = await productManage.deleteProduct(1);
    console.log(products);

    
}

testProducts();


