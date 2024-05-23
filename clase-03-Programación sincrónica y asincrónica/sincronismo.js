/* 
Las operaciones síncronas son bloqueantes, esto significa que las otras tareas no pueden comenzar a ejecutarse
hasta que la primera no haya terminado de ejecutarse.
*/

console.log("Inicio del proceso");

function dos() {
  console.log("Dos");
}

function uno(){
  console.log("Uno");
  dos();

  console.log("Tres");
}

uno();

console.log("Fin del proceso");
