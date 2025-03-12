// El código original tenía:
// Violación del Principio de Responsabilidad Única (SRP)
//    La clase FileManager tiene dos responsabilidades:
//    Manejo de archivos (lectura/escritura).
//    Gestión de rutas de archivos (almacena el filePath).
//    Esto implica que si queremos cambiar cómo se manejan los archivos (por ejemplo, cambiar fs por otro sistema como un almacenamiento en la nube),
//    tendríamos que modificar la misma clase, lo cual es un mal diseño.

// Violación del Principio Abierto/Cerrado (OCP)
//    Si queremos agregar nuevas formas de almacenamiento (por ejemplo, base de datos o API remota), tendríamos que modificar la clase FileManager, lo que rompe el principio de extensión sin modificación.

// Violación del Principio de Inversión de Dependencias (DIP)
//    FileManager depende directamente de fs, una biblioteca externa.
//    Lo ideal es depender de una abstracción (una interfaz) en lugar de una implementación concreta.


// import * as fs from "fs";

// // Definimos una interfaz para la gestión de archivos (DIP, OCP)
// interface IFileManager {
//   read(): string;
//   write(data: string): void;
// }

// // Implementación de un manejador de archivos local (SRP, DIP)
// class LocalFileManager implements IFileManager {
//   constructor(private filePath: string) {}

//   public read(): string {
//     try {
//       return fs.readFileSync(this.filePath, "utf-8");
//     } catch (error) {
//       console.error("Error al leer el archivo:", error);
//       return "";
//     }
//   }

//   public write(data: string): void {
//     try {
//       fs.writeFileSync(this.filePath, data, "utf-8");
//       console.log("Archivo escrito exitosamente.");
//     } catch (error) {
//       console.error("Error al escribir en el archivo:", error);
//     }
//   }
// }

// // Se podría agregar otra implementación, por ejemplo, para almacenamiento en la nube
// class CloudFileManager implements IFileManager {
//   private cloudStorage: Map<string, string> = new Map();

//   constructor(private filePath: string) {}

//   public read(): string {
//     return this.cloudStorage.get(this.filePath) || "";
//   }

//   public write(data: string): void {
//     this.cloudStorage.set(this.filePath, data);
//     console.log("Archivo guardado en la nube.");
//   }
// }

// // Cliente que usa IFileManager (DIP)
// class FileService {
//   constructor(private fileManager: IFileManager) {}

//   public readFile(): string {
//     return this.fileManager.read();
//   }

//   public writeFile(data: string): void {
//     this.fileManager.write(data);
//   }
// }

// // Uso con un archivo local
// const localFileManager = new LocalFileManager("example.txt");
// const fileService = new FileService(localFileManager);

// // Leer y escribir archivos
// console.log("Contenido actual:", fileService.readFile());
// fileService.writeFile("Nuevo contenido en el archivo.");
// console.log("Contenido actualizado:", fileService.readFile());