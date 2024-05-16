class Person {
  // El constructor es el método (función) que se ejecuta al instanciar una clase
  constructor(name, lastName, age) {
    /* 
    Los atributos de la clase son variables internas, que se le puede asignar un valor inicial por defecto o 
    asignarle un valor al momento de instanciar una clase, se le antepone la palabra this para determinar que 
    la variable que pertenece a la clase.
    */
    this.name = name; // Variable que se le asigna un valor que llega por parámetros al momento de instanciar.
    this.lastName = lastName;
    this.age = age;
    this.status = true; // Variable inicializada por defecto en true.
  }

  /* 
Las propiedades estáticas están asociadas a la clase y no al objeto que se instancia, 
por lo tanto podemos acceder y modificar las propiedades estáticas sin la necesidad 
de instanciar una clase.
*/

  static specie = "Humano";

  // Métodos - Son funciones que se pueden llamar luego de instanciar una clase
  showPerson() {
    console.log(`El nombre de la persona es ${this.name} ${this.lastName} tiene la edad de ${this.age}`);
  }

  changeName(name) {
    this.name = name;
  }

  calcAge() {
    console.log(`El año pasado tenía ${this.age - 1} años de edad`);
  }

  static message() {
    console.log("Hola este es un mensaje de la clase");
  }
}

const person1 = new Person("Juan", "Perez", 45);

person1.showPerson();

person1.changeName("Matias");

person1.showPerson();

person1.calcAge();

console.log(Person.specie);
Person.specie = "Zombi";

console.log(Person.specie);

Person.message();
// Person.showPerson();
