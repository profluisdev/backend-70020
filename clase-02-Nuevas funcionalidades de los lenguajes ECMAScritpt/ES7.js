/* 
Se introduce el operador exponencial **, independizándose poco a poco de la librería Math.
Manejo de array includes. Éste nos permitirá saber si algún elemento existe dentro del arreglo.
*/

// Operador exponencial
let numbers = [1, 2, 3, 4, 5, 6];
let numbersExponential = numbers.map((number, index) => number ** index); // 1**0, 2**1, 3**2, etc
// 3**2 = 3 x 3 = 9 - Tres elevado a la dos es igual a nueve

console.log(numbersExponential);

// Método array include
let names = ["Juan", "Pedro", "Ana", "María"];

if (names.includes("Pepe")) {
  console.log("En nombre se encuentra dentro del array");
} else {
  console.log("En nombre no se encuentra dentro del array");
}
