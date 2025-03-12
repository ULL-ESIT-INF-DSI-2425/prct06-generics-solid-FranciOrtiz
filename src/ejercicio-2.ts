
export interface Song {
  title: string;
  duration: number; // en segundos
  genres: string[];
  isSingle: boolean;
  playCount: number;
}

// Clase base para Discos y Singles
export abstract class MusicCollection {
  constructor(public title: string, public year: number, public songs: Song[]) {}
  
  getSongCount(): number {
    return this.songs.length;
  }
  
  getTotalDuration(): number {
    return this.songs.reduce((sum, song) => sum + song.duration, 0);
  }
  
  getTotalPlays(): number {
    return this.songs.reduce((sum, song) => sum + song.playCount, 0);
  }
}
  
// Clase Disco (contiene varias canciones)
export class Album extends MusicCollection {
  constructor(title: string, year: number, songs: Song[]) {
    super(title, year, songs);
  }
}
  
// Clase Single (generalmente una única canción)
export class Single extends MusicCollection {
  constructor(title: string, year: number, song: Song) {
    super(title, year, [song]);
  }
}

export class Discography<T extends MusicCollection> {
  private collection: T[] = [];
  
  add(item: T): void {
    this.collection.push(item);
  }
  
  getAll(): T[] {
    return [...this.collection];
  }
  
  searchByTitle(title: string): T[] {
    return this.collection.filter((item) => item.title.includes(title));
  }
  
  searchByYear(year: number): T[] {
    return this.collection.filter((item) => item.year === year);
  }
}

export class Artist {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Discography<MusicCollection>
  ) {}
  
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