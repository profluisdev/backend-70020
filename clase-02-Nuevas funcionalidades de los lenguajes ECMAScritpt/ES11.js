/* 
Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, a diferencia del operador ||, éstas filtran “falseys”
Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.
*/

// Operador nullish
let variableDePrueba = 0;

let variableAsignable = variableDePrueba || "Sin valor";
console.log(variableAsignable);

let variableConNullish = variableDePrueba ?? "Sin valor";
console.log(variableConNullish);

// Variables privadas en las clases

class Persona {
  #nombreCompleto; // El # indica que es una variable privada.
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#nombreCompleto = `${this.nombre} ${this.apellido}`;
  }

  obtenerNombreCompleto() {
    // getter
    return this.#nombreCompleto;
  }

  cambiarNombreCompleto(nombreCompleto) {
    // setter
    this.#nombreCompleto = nombreCompleto;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.obtenerNombreCompleto());
persona1.cambiarNombreCompleto("Sapo Pepe");
console.log(persona1.obtenerNombreCompleto());

