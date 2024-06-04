import fs from "fs";

/* 
fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.promises.readFile  = Para obtener el contenido de un archivo.
fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const createFile = async (path, content1, content2) => {
  try {
    // Crear el archivo
    await fs.promises.writeFile(path, content1);

    // Leer el archivo
    let message = await fs.promises.readFile(path, "utf-8");
    console.log(`Mensaje: ${message}`);

    // Agregar contenido al archivo
    await fs.promises.appendFile(path, `\n${content2}`);
    message = await fs.promises.readFile(path, "utf-8");
    console.log(`Mensaje: ${message}`);
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.promises.unlink(path);
    
  } catch (error) {
    console.log(`${error}`);
  }
};

createFile("./prueba1.txt", "- Ir a caminar", "- Ir de compras");

deleteFile("./prueba1.txt");

