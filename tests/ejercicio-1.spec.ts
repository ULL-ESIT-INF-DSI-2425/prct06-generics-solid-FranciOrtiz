import {describe, expect, test} from "vitest"
import {Streamable, BasicStreamableCollection, VideoContent, SeriesCollection, MoviesCollection, DocumentaryCollection} from "../src/ejercicio-1.ts"

let serie: VideoContent = {title: "La vida", year: 2003, genre:"Terror", duration: 100000};
const Series = new SeriesCollection([serie]);

describe("Prueba de Series", () => {

  test("Busquedad de series", () => {
    expect(Series.getAll()).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });

  test("Busqueda de serie por nombre", () => {
    expect(Series.searchByName("La vida")).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });

  test("Busqueda de serie por año", () => {
    expect(Series.searchByYear(2003)).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });


  test("Busqueda de series tras añadido", () => {
    Series.add({title:"Shrek", year: 2005, genre: "Fantasia", duration: 120})
    expect(Series.getAll()).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}, {title:"Shrek", year: 2005, genre: "Fantasia", duration: 120}]);
  });

  test("Busqueda por nombre", () => {
    expect(Series.searchByName("Shrek")).toEqual([{title:"Shrek", year: 2005, genre: "Fantasia", duration: 120}]);
  });

  test("Busqueda por año", () => {
    expect(Series.searchByYear(2005)).toEqual([{title:"Shrek", year: 2005, genre: "Fantasia", duration: 120}]);
  });

  test("Comprobación de borrado correcto", () => {
    Series.remove(item => item.title === "Shrek");
    expect(Series.getAll()).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });
});

let Movie: VideoContent = {title: "La vida", year: 2003, genre:"Terror", duration: 100000};
const Movies = new MoviesCollection([Movie])

describe("Test de peliculas", () => {
  test("Búsqueda por nombre", () => {
    expect(Movies.searchByName("La vida")).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });

  test("Búsqueda por año", () => {
    expect(Movies.searchByYear(2003)).toEqual([{title: "La vida", year: 2003, genre:"Terror", duration: 100000}]);
  });
});

let documental: VideoContent = {title: "El oso", year: 2025, genre:"Educativo", duration:320};
const Documentals = new DocumentaryCollection([documental]);

describe("Test de documentales", () => {
  test("Busqueda de año", () => {
    expect(Documentals.searchByYear(2025)).toEqual([{title: "El oso", year: 2025, genre:"Educativo", duration:320}]);
  });

  test("Busqueda por nombre", () => {
    expect(Documentals.searchByName("El oso")).toEqual([{title: "El oso", year: 2025, genre:"Educativo", duration:320}])
  });
});