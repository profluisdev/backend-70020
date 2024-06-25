const socket = io(); // Hacemos referencia a socket.io
// on: escuchar
// emit: enviar

socket.emit("message", "Hola servidor te estoy enviando un mensaje");

socket.on("socket-todos", (data) => {
  console.log(data);
});

socket.on("socket-individual", (data) => {
  console.log(data);
  
})

socket.on("socket-excluye-actual", (data) => {
  console.log(data);
})
