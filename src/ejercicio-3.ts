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

// @ts-ignore
const fs = require("fs");

/**
 * Interfaz que recoge las funciones de manejo de archivos en un pc
 */
export interface IFileManager {
  /**
   * Función básica de lectura de un fichero
   */
  read(): string;
  /**
   * Función básica de escritura de un fichero
   * @param data Datos a escribir en el fichero
   */
  write(data: string): void;
}

/**
 * Clase representante de los archivos locales de un pc
 */
export class LocalFileManager implements IFileManager {
  /**
   * Constructor principal de la clase
   * @param filePath Dirección a seguir para llegar al archivo local a tratar
   */
  constructor(private filePath: string) {}
  /**
   * Función de lectura de archivos locales
   * @returns O bien si se ha leido el archivo, o nada en caso de error 
   */
  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return "";
    }
  }
  /**
   * Función de escritura de un archivo local
   * @param data Datos a escribir dentro del fichero
   */
  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}

/**
 * Clase representante de los archivos en la nube
 */
export class CloudFileManager implements IFileManager {
  private cloudStorage: Map<string, string> = new Map();
  /**
   * Constructor principal de la clase
   * @param filePath Camino de archivos que lleva al deseado
   */
  constructor(private filePath: string) {}
  /**
   * Función de lectura de un archivo almacenado en la nube
   * @returns El contenido del archivo en la nube, o nada en caso de error
   */
  public read(): string {
    return this.cloudStorage.get(this.filePath) || "";
  }
  /**
   * Función de escritrura en un archivo en la nube
   * @param data Datos a escribir en el archivo en la nube
   */
  public write(data: string): void {
    this.cloudStorage.set(this.filePath, data);
    console.log("Archivo guardado en la nube.");
  }
}

/**
 * Clase representativa de los servicios de ficheros externos
 */
export class FileService {
  /**
   * Contructor principal de la clase
   * @param fileManager Tipo de administración de ficheros que se usa 
   */
  constructor(private fileManager: IFileManager) {}
  /**
   * Función de lectura del archivo
   * @returns Resultado de la función read del tipo de administrador de ficheros seleccionado
   */
  public readFile(): string {
    return this.fileManager.read();
  }
  /**
   * Función de escritura de archivo
   * @param data Datos a escribir en el archivo
   */
  public writeFile(data: string): void {
    this.fileManager.write(data);
  }
}