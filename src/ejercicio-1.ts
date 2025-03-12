/**
 * Interfaz flexible con las funciones comunes entre objetos stremeables 
 */
export interface Streamable<T> {
  add(item: T): void;
  remove(predicate: (item: T) => boolean): void;
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  getAll(): T[];
}
/**
 * Clase de una colección básica de objetos Stremeables
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[];
  /**
   * Constructor de la clase Básica
   * @param items Listado de items que se van a listar4 en la lista protegida
   */
  constructor(items: T[] = []) {
    this.items = items;
  }
  /**
   * Función que añade items nuevos a la lista
   * @param item Nuevo item a introducir a la lista
   */
  add(item: T): void {
    this.items.push(item);
  }
  /**
   * Función para eliminar objetos en la lista
   * @param item Item que se quiere eliminar en la lista interna
   */
  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(i => !predicate(i));
  }
  /**
   * Función que devuelve todos los items de la lista
   * @returns Todos los items contenidos en la lista interna
   */
  getAll(): T[] {
    return [...this.items];
  }
  /**
   * Función abstracta que implementarán las clases derivadas, de búsquedad por nombre
   * @param name Nombre por el que se buscará el nombre
   */
  abstract searchByName(name: string): T[];
  /**
   * Función abstracta de búsqueda por año
   * @param year Introduce el valor numérico del año a buscar
   */
  abstract searchByYear(year: number): T[];
}
/**
 * Interfaz dedicada a los contenidos de video, con las cosas comunes de estos
 */
export interface VideoContent {
  title: string;
  year: number;
  genre: string;
  duration: number; // en minutos
}
/**
 * Clase dedicadas a las series
 */
export class SeriesCollection extends BasicStreamableCollection<VideoContent> {
  /**
   * Función de busqueda por nombre de las series
   * @param name Nombre de la(s) serie(s) a buscar
   * @returns Listado con los nombres que coinciden
   */
  searchByName(name: string): VideoContent[] {
    return this.items.filter((series) => series.title.includes(name));
  }
  /**
   * Función de busquedad de serie por año
   * @param year Año a buscar
   * @returns Listado de series que tengan el año coincidente
   */
  searchByYear(year: number): VideoContent[] {
    return this.items.filter((series) => series.year === year);
  }
}
/**
 * Clase dedicada a las peliculas
 */
export class MoviesCollection extends BasicStreamableCollection<VideoContent> {
  /**
   * Función de busqueda por nombre de las peliculas
   * @param name Nombre de la(s) pelicula(s) a buscar
   * @returns Listado con los nombres que coinciden
   */
  searchByName(name: string): VideoContent[] {
    return this.items.filter((movie) => movie.title.includes(name));
  }
  /**
   * Función de busquedad de peliculas por año
   * @param year Año a buscar
   * @returns Listado de peliculas que tengan el año coincidente
   */
  searchByYear(year: number): VideoContent[] {
    return this.items.filter((movie) => movie.year === year);
  }
}
/**
 * Clase dedicada a los documentales
 */
export class DocumentaryCollection extends BasicStreamableCollection<VideoContent> {
  /**
   * Función de busqueda por nombre de los documentales
   * @param name Nombre de lo(s) documental(es) a buscar
   * @returns Listado con los nombres que coinciden
   */
  searchByName(name: string): VideoContent[] {
    return this.items.filter((doc) => doc.title.includes(name));
  }
  /**
   * Función de busquedad de documentales por año
   * @param year Año a buscar
   * @returns Listado de documentales que tengan el año coincidente
   */
  searchByYear(year: number): VideoContent[] {
    return this.items.filter((doc) => doc.year === year);
  }
}
