/**
 * Interfaz de coleccionable
 */
export interface Collectable<T> {
  /**
   * Función genérica para añadir item
   * @param item Item a añadir
   */
  addItem(item: T): void;
  /**
   * Función genérica que obtiene un item
   * @param index Indice del item a recuperar
   */
  getItem(index: number): T;
  /**
   * Función genérica que borra un item
   * @param index Índice del número a borrar
   */
  removeItem(index:number): T;
  /**
   * Función que devuelve el número de items 
   */
  getNumberOfItems(): number;
}
/**
 * Interfaz genérica de un imprimible
 */
export interface Printable {
  /**
   * Función de interfaz, que imprime los valores como un string
   */
  print(): string;
}
/**
 * Clase abstracta de Colección de Imprimibles, que implementa las interfaces de colección e imprimible
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  protected items: T[] = [];
  /**
   * Constructor principal de la clase
   * @param items_nuevos Items que llevarán el array privado
   */
  constructor(items_nuevos: T[]) {
    this.items = items_nuevos;
  }
  /**
   * Función abstracta de imprimir que realizarán las clases que extiendan esta
   */
  abstract print(): string;
  /**
   * Función que añade items al array privado de la clase
   * @param item Nuevo item a añadir al array
   */
  addItem(item: T): void {
    this.items.push(item);
  }
  /**
   * Función que devuelve un item en función de su indice dentro del array
   * @param index Indice en el que se ubica el item deseado
   * @returns Item deseado
   */
  getItem(index: number): T {
    return this.items[index];
  }
  /**
   * Función que borra un item ubicado en el indice del array
   * @param index Índice del item a borrar 
   * @returns Item que ha sido borrado
   */
  removeItem(index: number): T {
    let elemento_devolver: T = this.getItem(index);
    this.items = this.items.filter((elemento) => elemento !== this.getItem(index));
    return elemento_devolver;
  }
  /**
   * Función que devuelve el tamaño del array privado
   * @returns Número de elementos que tiene el array
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
}
/**
 * Clase de coleccionables imprimibles numericos, que hereda de la clase PrintableCollection
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Función print, de funcionamiento semejante a un toString
   */
  print(): string {
    let cadena: string = "";
    for(let i = 0; i < this.items.length; i++) {
        if(i === 0) {
          cadena += this.items[i];
        }
        else {
          cadena += "," + this.items[i];
        }
      }
    return cadena;
  }
}
/**
 * Clase de colección de items imprimibles de tipo string
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Funcion print que devuelve la concatenación de cadenas separadas por comas del array
   * @returns 
   */
  print(): string {
    let cadena: string = "";
    for(let i = 0; i < this.items.length; i++) {
      if (i !== this.items.length - 1) {
        cadena += this.items[i] + ", ";
      }
      else {
        cadena += this.items[i];
      }
    }
    return cadena;
  }
}