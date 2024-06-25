const socket = io(); // Hacemos referencia a socket.io
// on: escuchar
// emit: enviar

const form = document.getElementById("form");
const productList = document.getElementById("productsList");



form.addEventListener("submit", (event) => {

  event.preventDefault();
  const title = event.target.elements.title.value;
  const price = event.target.elements.price.value;
  const stock = event.target.elements.stock.value;

  const newProduct = {
    title,
    price,
    stock
  };

  socket.emit("product", newProduct);
  
})


socket.on("products", (data) => {
  productList.innerHTML = "";
  data.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>Título: ${product.title}</p>
    <p>Precio: ${product.price}</p>
    <p>Stock: ${product.stock}</p>
    `;

    productList.append(div);
    const btn = document.createElement("button");
    btn.innerText = "comprar";
    btn.onclick = () => {
      console.log("comprando");
      data[index].stock = data[index].stock - 1; 
      socket.emit("changeStock", data);
    };
    div.append(btn);
  });
})