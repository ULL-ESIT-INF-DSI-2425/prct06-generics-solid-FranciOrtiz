
/**
 * Interfaz de los elementos principales de una canción
 */
export interface Song {
  title: string;
  duration: number; // en segundos
  genres: string[];
  isSingle: boolean;
  playCount: number;
}

/**
 * Clase abstracta de una colección de música
 */
export abstract class MusicCollection {
  /**
   * Constructor principal de la clase
   * @param title Titulo de la colección
   * @param year Año de publicación
   * @param songs Array de canciones de la colección
   */
  constructor(public title: string, public year: number, public songs: Song[]) {}
  /**
   * Función que muestra la cantidad de canciones que tiene una colección
   * @returns Total de canciones que se hayan en la colección
   */
  getSongCount(): number {
    return this.songs.length;
  }
  /**
   * Función que muestra la duración total de tiempo que se tarda en escuchar entera
   * @returns Segundos totales que se tarda en escuchar la colección entera
   */
  getTotalDuration(): number {
    return this.songs.reduce((sum, song) => sum + song.duration, 0);
  }
  /**
   * Función que muestra cuantas veces se ha escuchado la canción
   * @returns Cantidad de veces que la canción ha sido reproducida
   */
  getTotalPlays(): number {
    return this.songs.reduce((sum, song) => sum + song.playCount, 0);
  }
}
  
/**
 * Clase Album
 */
export class Album extends MusicCollection {
  /**
   * Constructor principal de un album
   * @param title Título del album
   * @param year Año de publicación
   * @param songs Caniones que tiene este 
   */
  constructor(title: string, year: number, songs: Song[]) {
    super(title, year, songs);
  }
}
  
/**
 * Clase de un Single
 */
export class Single extends MusicCollection {
  /**
   * Constructor de un Single
   * @param title Título del Single
   * @param year Año de publicación
   * @param song Canción individual de este
   */
  constructor(title: string, year: number, song: Song) {
    super(title, year, [song]);
  }
}
/**
 * Función de una discografía de un cantante
 */
export class Discography<T extends MusicCollection> {
  private collection: T[] = [];
  /**
   * Función para añadir un elemento T a la discografía
   * @param item Item a añadir
   */
  add(item: T): void {
    this.collection.push(item);
  }
  /**
   * Función que muestra toda la discografía
   * @returns La discografía completa por pantalla
   */
  getAll(): T[] {
    return [...this.collection];
  }
  /**
   * Función de búsquedad mediante el título de un canción
   * @param title Título de canción a buscar
   * @returns La canción encontrada, ya bien sea en cualquier tipo de item
   */
  searchByTitle(title: string): T[] {
    return this.collection.filter((item) => item.title.includes(title));
  }
  /**
   * Función de búsquedad mediante el año de publicación de una canción
   * @param year Año en el que la canción salió
   * @returns Array de elementos que tengan canciones salidas en ese año
   */
  searchByYear(year: number): T[] {
    return this.collection.filter((item) => item.year === year);
  }
}
/**
 * Clase representativa de un Artista
 */
export class Artist {
  /**
   * Constructor principal del artista
   * @param name Nombre de este
   * @param monthlyListeners Cantidad de oyente mensuales que tiene
   * @param discography Discografía del mismo
   */
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Discography<MusicCollection>
  ) {}
  /**
   * Función que imprime en forma de tabla, la discografía del artista
   */
  showDiscography(): void {
    console.table(this.discography.getAll().map(album => ({
      Title: album.title,
      Year: album.year,
      Songs: album.getSongCount(),
      Duration: album.getTotalDuration(),
      Plays: album.getTotalPlays(),
    })));
  }
}