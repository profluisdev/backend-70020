/* 
Un callback es una función como cualquier otra, la diferencia está en que ésta se pasa como parámetro 
(argumento) para poder ser utilizado por otra función.
Permite que entonces las funciones ejecuten operaciones adicionales dentro de sí mismas.
Cuando pasamos un callback, lo hacemos porque no siempre sabemos qué queremos que se ejecute en cada caso 
de nuestra función.
*/

// Función map

let arrayOriginal = [1, 2, 3, 4, 5];

console.log(arrayOriginal);

let nuevoArray = arrayOriginal.map( numero => numero + 1);
console.log(nuevoArray);

let arrayPares = arrayOriginal.map(numero => {
  if(numero % 2 === 0) {
    return numero
  }
  return "No es par";
})

console.log(arrayPares);