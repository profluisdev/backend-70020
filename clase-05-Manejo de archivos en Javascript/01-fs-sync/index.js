// Importar fs de node
import fs from "fs";

/* 
Las principales operaciones que podemos hacer con fs síncrono son:
writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
readFileSync = Para obtener el contenido de un archivo osea leerlo.
appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
existsSync = Corrobora que un archivo exista!
*/

let path = "./prueba3.txt";

const createFile = (path, content1, content2) => {
  // Crear un archivo
  fs.writeFileSync(path, content1);

  // Proceso de archivo

  // Chequeamos que el archivo exista
  if (fs.existsSync(path)) {
    // true o false
    // En caso que el archivo exista
    // Leer el archivo
    let message = fs.readFileSync(path, "utf-8"); // utf-8 es el tipo de codificación que usamos para leer el archivo
    console.log(`Mensaje: ${message}`);

    // Agregar información al archivo
    // Colocar un texto a al final de un archivo
    fs.appendFileSync(path, `\n${content2}`);
    message = fs.readFileSync(path, "utf-8");
    console.log(`Mensaje: ${message}`);

    // Eliminamos el archivo
    // fs.unlinkSync(path);
  }
};

createFile(path, "- Ir a caminar", "- Ir a correr");
