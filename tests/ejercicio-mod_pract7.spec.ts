import {expect, describe, test} from "vitest"
import {Logger, Logging, accion} from "../src/ejercicio-mod_pract7.ts"

describe("Pruebas de funcionalidad básica de la clase Logger", () => {
  test("Creación de un objeto Logger, con una tupla específica de sucesos", () => {
    const myLogger = Logger.getLoggerInstance();
    const currentDate: Date = new Date();
    const items: Logging[] = [{User:"Manolo", Accion: "Inicio de sesión", Fecha_Hora: currentDate},
        {User:"Pepe", Accion: "Inicio de sesión", Fecha_Hora: new Date(2021, 9, 31, 15, 30, 0, 0)},
        {User:"Pepe", Accion: "Salir", Fecha_Hora: new Date(2025, 9, 31, 16, 45, 0, 0)},
        {User:"Antonio", Accion: "Salir", Fecha_Hora: new Date(2022, 9, 31, 15, 30, 0, 0)}];
    myLogger.setItems(items);
    expect(myLogger.getNumberOfItems()).toEqual(4);
    expect(myLogger.getItems()).toEqual([{User:"Manolo", Accion: "Inicio de sesión", Fecha_Hora: currentDate},
        {User:"Pepe", Accion: "Inicio de sesión", Fecha_Hora: new Date(2021, 9, 31, 15, 30, 0, 0)},
        {User:"Pepe", Accion: "Salir", Fecha_Hora: new Date(2025, 9, 31, 16, 45, 0, 0)},
        {User:"Antonio", Accion: "Salir", Fecha_Hora: new Date(2022, 9, 31, 15, 30, 0, 0)}]);
  });
});

describe("Pruebas de búsquedad de los items en función del nombre de usuario", () => {
  const myLogger = Logger.getLoggerInstance();
  const currentDate: Date = new Date(2026, 9, 31, 15, 30, 0, 0);
  const items: Logging[] = [{User:"Manolo", Accion: "Inicio de sesión", Fecha_Hora: currentDate},
    {User:"Pepe", Accion: "Inicio de sesión", Fecha_Hora: new Date(2021, 9, 31, 15, 30, 0, 0)},
    {User:"Pepe", Accion: "Salir", Fecha_Hora: new Date(2025, 9, 31, 16, 45, 0, 0)},
    {User:"Antonio", Accion: "Salir", Fecha_Hora: new Date(2022, 9, 31, 15, 30, 0, 0)}];
  myLogger.setItems(items);
  test("Búsquedad de los items de PEPE", () => {
    
    expect(myLogger.getItem_user("Pepe")).toEqual([{User:"Pepe", Accion: "Inicio de sesión", Fecha_Hora: new Date(2021, 9, 31, 15, 30, 0, 0)},
        {User:"Pepe", Accion: "Salir", Fecha_Hora: new Date(2025, 9, 31, 16, 45, 0, 0)}]);
  });

  test("Búsquedad de los items de Manolo", () => {
    expect(myLogger.getItem_user("Manolo")).toEqual([{User:"Manolo", Accion: "Inicio de sesión", Fecha_Hora: currentDate}]);
  });
});