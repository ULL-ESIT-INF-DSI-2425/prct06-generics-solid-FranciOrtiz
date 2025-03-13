
import {test, describe, expect} from "vitest"
import {Printable, Collectable, PrintableCollection, NumericPrintableCollection, StringPrintableCollection} from "../src/ejercicio-mod.ts"

describe("Pruebas de la clase NumericPrintableCollection", () => {
  let Coleccion = new NumericPrintableCollection([1, 2, 3, 4, 5, 6]);

  test("Prueba de añadir item nuevo en el array de números", () => {
    Coleccion.addItem(7);
    expect(Coleccion.print()).toEqual("1,2,3,4,5,6,7");
  });

  test("Prueba de eliminar items en el array de números", () => {
    Coleccion.removeItem(6);
    expect(Coleccion.print()).toEqual("1,2,3,4,5,6");
  });

  test("Prueba de obtener un Item específico", () => {
    expect(Coleccion.getItem(5)).toEqual(6);
  });

  test("Prueba de la obtención de los números de los items en la colección", () => {
    expect(Coleccion.getNumberOfItems()).toEqual(6);
  });
});

describe("Pruebas para la clase StringPrintableCollection", () => {
  let coleccion_palabras = new StringPrintableCollection(["hola", "buenas", "tardes", "noches"]);

  test("Prueba de añadir una palabra nueva", () => {
    coleccion_palabras.addItem("Semana");
    expect(coleccion_palabras.print()).toEqual("hola, buenas, tardes, noches, Semana");
  });

  test("Prueba de eliminar items en el array de números", () => {
    coleccion_palabras.removeItem(4);
    expect(coleccion_palabras.print()).toEqual("hola, buenas, tardes, noches, Semana");
  });

  test("Prueba de obtener un Item específico", () => {
    expect(coleccion_palabras.getItem(3)).toEqual("noches");
  });

  test("Prueba de la obtención de los números de los items en la colección", () => {
    expect(coleccion_palabras.getNumberOfItems()).toEqual(4);
  });
});