// Importar el paquete instalado
import moment from "moment";

const hoy = moment();

const fechaNacimiento = moment("1987-200-13", "YYYY-MM-DD");

if (fechaNacimiento.isValid()) {
  console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fechaNacimiento, "days")} días`);
} else {
  console.log("Error: No se puede proseguir ya que la fecha es inválida");
}

