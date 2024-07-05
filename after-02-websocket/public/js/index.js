const socket = io();

const productsList = document.getElementById("productsList");
const addForm = document.getElementById("addForm");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const deleteForm = document.getElementById("deleteForm");

// Recibimos los productos
socket.on("products", (data) => {
  console.log(data);
  productsList.innerHTML = "";

  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("m-4");
    card.innerHTML = `
      <div class="card-body m-2">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">ID: ${product.id}</p>
        <p class="card-text">${product.description}</p>
        <p class="card-text">$${product.price}</p>
      </div>
    `;

    productsList.appendChild(card);
  });
});

// Enviamos el producto

addForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("/realtimeproducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title.value, price: price.value, description: description.value }),
  });
});

// Eliminar el productos

deleteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = document.getElementById("id");
  console.log(id);
  await fetch("/realtimeproducts", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id.value }),
  });
});
