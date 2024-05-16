
let nombre = "Juan";
nombre = 10;

const apellido = "Perez";
// apellido = "Juarez"; // Nos devuelve un Type Error

// Mutabilidad 
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 34
};
console.log(persona);

persona.nombre = "Luis";

console.log(persona);
