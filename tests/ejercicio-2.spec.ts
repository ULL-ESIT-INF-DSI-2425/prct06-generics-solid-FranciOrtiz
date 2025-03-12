import { describe, it, expect, beforeEach, vi} from "vitest";
import { Song, Album, Single, Discography, Artist } from "../src/ejercicio-2.ts";

describe("Music Library", () => {
  let song1: Song, song2: Song, song3: Song;
  let album: Album;
  let single: Single;
  let discography: Discography<Album | Single>;
  let artist: Artist;

  beforeEach(() => {
    song1 = { title: "Song 1", duration: 200, genres: ["Rock"], isSingle: false, playCount: 100 };
    song2 = { title: "Song 2", duration: 180, genres: ["Pop"], isSingle: false, playCount: 200 };
    song3 = { title: "Song 3", duration: 240, genres: ["Jazz"], isSingle: true, playCount: 300 };

    album = new Album("Greatest Hits", 2023, [song1, song2]);
    single = new Single("Solo Track", 2024, song3);

    discography = new Discography();
    discography.add(album);
    discography.add(single);

    artist = new Artist("The Legends", 1000000, discography);
  });

  it("debería calcular correctamente el número de canciones en un álbum", () => {
    expect(album.getSongCount()).toBe(2);
  });

  it("debería calcular correctamente la duración total de un álbum", () => {
    expect(album.getTotalDuration()).toBe(380);
  });

  it("debería calcular correctamente el total de reproducciones de un álbum", () => {
    expect(album.getTotalPlays()).toBe(300);
  });

  it("debería agregar y recuperar elementos en la discografía", () => {
    expect(discography.getAll()).toHaveLength(2);
  });

  it("debería buscar en la discografía por título", () => {
    expect(discography.searchByTitle("Greatest Hits")).toHaveLength(1);
    expect(discography.searchByTitle("Solo Track")).toHaveLength(1);
    expect(discography.searchByTitle("Nonexistent")).toHaveLength(0);
  });

  it("debería buscar en la discografía por año", () => {
    expect(discography.searchByYear(2023)).toHaveLength(1);
    expect(discography.searchByYear(2024)).toHaveLength(1);
    expect(discography.searchByYear(1990)).toHaveLength(0);
  });

  it("debería mostrar la discografía correctamente", () => {
    console.table = vi.fn(); // Simulamos `console.table`
    artist.showDiscography();
    expect(console.table).toHaveBeenCalled();
  });
});