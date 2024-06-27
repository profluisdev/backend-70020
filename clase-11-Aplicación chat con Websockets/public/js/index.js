const socket = io();

let message = document.getElementById("message");
let messageLog = document.getElementById("messageLog");
let user;
// Alerta para ingresar el nombre del usuario

Swal.fire({
  title: "Indentificate",
  input: "text",
  text: "Ingresa el usuario para identificarse en el chat",
  inputValidator: (value) => {
    return !value && "Por favor ingrese el nombre de usuario";
  },
  allowOutsideClick: false,
}).then((result) => {
  user = result.value;
  // Enviamos el usuarios conectado al servidor
  socket.emit("newUser", user);
});

message.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && message.value.trim().length > 0) {
    socket.emit("message", { user: user, message: message.value });
    message.value = "";
  }
});

socket.on("messageLog", (data) => {
  let messages = "";

  data.forEach((userMessage) => {
    messages = messages + `${userMessage.user} dice: ${userMessage.message} </br>`;
  });

  messageLog.innerHTML = messages;
});

socket.on("newUser", (data) => {
  Swal.fire({
    text: `Se conectó ${data}`,
    toast: true,
    position: "top-right",
    timer: 2000,
  });
});
