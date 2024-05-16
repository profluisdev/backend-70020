
const x = "Declaro x fura de la función" // Scope Global

function example(){
  const x = "Declaro x dentro de la función" // Scope Local
  console.log(x);
}

example();

console.log(x);

