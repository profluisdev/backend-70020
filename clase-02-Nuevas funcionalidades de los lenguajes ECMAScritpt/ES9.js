/* 
Las principales funcionalidades de este release son:
Resolvedores de promesas con .finally(), para atender una promesa, se cumpla o no se cumpla. (Lo veremos más adelante)
Mayor control a los objetos con operadores rest y spread (aplicable también a arrays)
*/

// Operador spreed
let objet1 = {
  prop1: 1,
  prop2: 2,
};

console.log(objet1);

let objet2 = {
  ...objet1, // Hacemos una copia del objeto 1
  prop3: 3, // Añadimos una propiedad extra al objeto 2
};
console.log(objet2);

let objet3 = {
  ...objet2,
  prop2: "2", // Sobre escribe la propiedad que se copia del objeto
};
console.log(objet3);

// Operador rest

let { prop2, ...others } = objet2;

console.log(others);

let user = {
  name: "Juan",
  email: "jp@gmail.com",
  password: "123"
};

const {password, name, ...userMail } = user;

console.log(userMail);

