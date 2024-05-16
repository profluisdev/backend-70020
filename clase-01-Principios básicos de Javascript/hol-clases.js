
class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contadorIndividual = 0; 
  }

  static contador = 0; // contador global

  getResponsable() {
    console.log(`El responsable del contador es ${this.nombre}`);
  }

  contar(){
    // Aumentamos el valor del contador Global
    Contador.contador++;

    // Aumentamos el valor del contador individual
    this.contadorIndividual++;
  }

  getContadorIndividual(){
    console.log(`El contador de ${this.nombre} es ${this.contadorIndividual}`);
  }

  getContadorGlobal(){
    console.log(`El contador global es ${Contador.contador}`);
  }
}

const pepe = new Contador("Pepe");

pepe.contar();
pepe.contar();
pepe.getResponsable();
pepe.getContadorIndividual();
pepe.getContadorGlobal();

console.log("");
console.log("-----------------------------");
console.log("");

const juan = new Contador("Juan");
juan.contar();
juan.contar();
juan.getResponsable();
juan.getContadorIndividual();
juan.getContadorGlobal();

console.log("");
console.log("-----------------------------");
console.log("");

const ana = new Contador("Ana");
ana.contar();
ana.contar();
ana.contar();
ana.getResponsable();
ana.getContadorIndividual();
ana.getContadorGlobal();
