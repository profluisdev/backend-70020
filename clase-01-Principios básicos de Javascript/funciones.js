
/* 
Las funciones son bloques de instrucciones que trabajan sobre un scope interno 
(conocido como scope local). Pueden encontrarse en su sintaxis básica o en su 
notación flecha.
*/

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(6, 10);

const res = (num1, num2) => console.log(num1 - num2);

res(20, 6);

// Funciones tradicionales con retorno
function showName(name) {
  return name;
}

console.log(showName("Micaela"));

const name = showName("Sebastian");
console.log(name);

const showLastName = lastName => lastName;
console.log(showLastName("Perez"));

const lastName = showLastName("Diaz");
console.log(lastName);