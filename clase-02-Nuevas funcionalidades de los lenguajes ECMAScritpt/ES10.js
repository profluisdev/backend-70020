/* 
String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
*/

// String.trim()

let cadena = "         Hola   ";
console.log(cadena);
console.log(cadena.length);

console.log(cadena.trim());
console.log(cadena.trim().length);

let cadena2 = "       Hola Mundo     ";
console.log(cadena2);
console.log(cadena2.length);

console.log(cadena2.trim());
console.log(cadena2.trim().length);

// Array flat
let numbers = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];
console.log(`Elementos del array numbers : ${numbers.length}`);

let numbersFlat = numbers.flat();
console.log(numbersFlat);
console.log(`Elementos del array numbersFlat : ${numbersFlat.length}`);

