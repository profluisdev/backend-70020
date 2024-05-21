/* 
Async await para mejor control asíncrono, sobre este ahondaremos más en futuras clases.
Object.entries, Object.values, Object.keys para un mejor control interno sobre las propiedades de un objeto.
*/

let person = {
  id: 1,
  first_name: "Luz",
  last_name: "Escalante",
  age: 25,
  gender: "",
};

// Objet.entries nos devuelve un array con arrays de dos elementos, en la posición 0 está la key y en la posición 1 el value
console.log(Object.entries(person));
const array = Object.entries(person);
// console.log(array);

// Objet.keys nos devuelve un array con todas las key del objeto
console.log(Object.keys(person));

// Objet.values nos devuelve un array con todos los values del objeto
console.log(Object.values(person));

// Verificar que el objeto contenga la propiedad género

if (Object.keys(person).includes("gender")) {
  console.log("La propiedad gender se encuentra en el objeto");
} else {
  console.log("La propiedad gender no se encuentra en el objeto");
}

// Verificar que todos los datos de la persona sean completados
if(Object.values(person).includes("")) {
  console.log("Se deben completar todos los datos");
} else {
  console.log("Muchas gracias");
}