/* 
Es un objeto especial que nos permitirá encapsular una operación, la cual reaccionará a 
dos posibles situaciones dentro de una promesa:
¿Qué debería hacer si la promesa se cumple?
¿Qué debería hacer si la promesa no se cumple?
Al prometerse algo, es una promesa en estado pendiente (pending), no sabemos cuándo se resolverá esa promesa. 
Sin embargo, cuando llega el momento, se nos notifica si la promesa se cumplió (Fulfilled, también 
lo encontramos como Resolved) o tal vez, a pesar del tiempo, al final nos notifiquen que la promesa 
no pudo cumplirse, se rechazó (Rejected).
*/

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, rejected) => {
    if (divisor === 0) {
      // No se cumple la promesa
      rejected("No se puede hacer divisiones por 0");
    } else {
      // Cuando se cumple la promesa
      resolve(dividendo / divisor);
    }
  });
};

dividir(9, 0)
  .then((response) => console.log(`El resultado de la división es : ${response}`))
  .catch((error) => console.log(`Error: ${error}`));

// Promesas anidadas

dividir(9, 3)
  .then((response) => {
    console.log(`El resultado de la división es : ${response}`);
    return response * 2;
  })
  .then((response2) => console.log(`El resultado de la división X 2 es : ${response2}`))
  .catch((error) => console.log(`Error: ${error}`));
