
/**
 * Enumeración de los tipos de acciones
 */
export type accion = "Inicio de sesión" | "Salir" | "Borrar" | "Escribir" | "Fallo";


/**
 * Tipo propio con las cualidades de un logging
 */
export type Logging = {
    User: string;
    Accion: accion;
    Fecha_Hora: Date;
}
/**
 * Clase Logger
 */  
export class Logger {
  private items: Logging[];
  
  private static loggerInstance: Logger;
  /**
   * Constructor privado por defecto de la clase logging
   */
  private constructor() {
    this.items = [];
  }
  /**
   * Función de obtención de las instacias de Logger
   * @returns Una instancia de Logger
   */
  public static getLoggerInstance(): Logger {
    if (!Logger.loggerInstance) {
      Logger.loggerInstance = new Logger();
    }
    return Logger.loggerInstance;
  }
  /**
   * Getter de los items del Logging
   * @returns Tupla privada de los elementos del Logger
   */
  getItems(): Logging[] {
    return Logger.loggerInstance.items;
  }
  /**
   * Setter de los items
   * @param items Items que tendrá el Logging
   */
  setItems(items: Logging[]) {
    Logger.loggerInstance.items = items;
  }
  /**
   * Obtención de todos los items que tengan el nombre de usuario pertinente
   * @param usuario Nombre del usuario a buscar
   * @returns Todas las acciones realizadas por ese usuario
   */
  getItem_user(usuario: string): Logging[] {
    return Logger.loggerInstance.items.filter((elemento) => elemento.User === usuario );
  }
  /**
   * Obtención de los items que tengan la acción proporcionada
   * @param accion Acción a buscar entre todos los usuarios
   * @returns Todas las acciones realizadas en el sistema del mismo tipo
   */
  getItem_accion(accion: accion): Logging[] {
    return Logger.loggerInstance.items.filter((elemento) => elemento.Accion === accion);
  }
  /**
   * Función que devuelve todas las acciones encerradas en un timeframe
   * @param fecha1 Fecha primeriza en la que se realizará la búsquedad
   * @param fecha2 Fecha tardía que marcará el límite del timeframe
   * @returns Todas las acciones encerradas en ese timeframe
   */
  getItem_date(fecha1: Date, fecha2: Date): Logging[] {
    const resultado: Logging[] = [];
    this.items.forEach((item) => {
    if (item.Fecha_Hora.getTime() > fecha1.getTime() && item.Fecha_Hora.getTime() < fecha2.getTime()) {
      resultado.push(item);
    }
    });
    return resultado;
  }
  /**
   * Función para añadir un nuevo item a la tupla
   * @param item Item a añadir
   */
  addItem(item: Logging) {
    Logger.loggerInstance.items.push(item);
  }
  /**
   * Función para obtener la cantidad de items que tiene la tupla interna
   * @returns 
   */
  getNumberOfItems() {
    return Logger.loggerInstance.items.length;
  }
}
// formato new Date (año, mes, dia, )
//   const myLogger = Logger.getLoggerInstance();
//   const currentDate: Date = new Date(2021, 9, 31, 15, 30, 0, 0);
//   const logging1: Logging = {User:"Manolo", Accion: "Inicio de sesión", Fecha_Hora: currentDate};
//   myLogger.addItem(logging1);
//   const logging2: Logging = {User:"Pepe", Accion: "Inicio de sesión", Fecha_Hora: new Date(2021, 9, 31, 15, 30, 0, 0)};
//   const logging4: Logging = {User:"Pepe", Accion: "Salir", Fecha_Hora: new Date(2025, 9, 31, 15, 30, 0, 0)};
//   const logging3: Logging = {User:"Antonio", Accion: "Salir", Fecha_Hora: new Date(2022, 9, 31, 15, 30, 0, 0)};
//   const secondLogger = Logger.getLoggerInstance();
//   secondLogger.addItem(logging2);
//   secondLogger.addItem(logging3);
//   secondLogger.addItem(logging4);
  
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
//   console.log(myLogger.getItem_accion("Salir"));
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
//   console.log(secondLogger.getItem_user("Pepe"));
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
  
//   Logger.getLoggerInstance().getItems().forEach((item) =>
//     console.log(item));
  