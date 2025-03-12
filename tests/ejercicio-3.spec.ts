import { describe, it, expect, vi, beforeEach } from "vitest";
// @ts-ignore
const fs = require("fs");
import { LocalFileManager, CloudFileManager, FileService } from "../src/ejercicio-3.ts"; // Ajusta la ruta según tu estructura

describe("FileManager Tests", () => {
  describe("LocalFileManager", () => {
    const mockFilePath = "test.txt";
    let localFileManager: LocalFileManager;

    beforeEach(() => {
      vi.restoreAllMocks(); // Restablece los mocks antes de cada test
      localFileManager = new LocalFileManager(mockFilePath);
    });

    it("debería leer un archivo correctamente", () => {
      vi.spyOn(fs, "readFileSync").mockReturnValue("Contenido de prueba");

      const content = localFileManager.read();
      expect(content).toBe("Contenido de prueba");
      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, "utf-8");
    });

    it("debería manejar errores al leer un archivo", () => {
      vi.spyOn(fs, "readFileSync").mockImplementation(() => {
        throw new Error("Error de lectura");
      });

      const content = localFileManager.read();
      expect(content).toBe("");
      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, "utf-8");
    });

    it("debería escribir en un archivo correctamente", () => {
      const writeSpy = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

      localFileManager.write("Nuevo contenido");
      expect(writeSpy).toHaveBeenCalledWith(mockFilePath, "Nuevo contenido", "utf-8");
    });

    it("debería manejar errores al escribir en un archivo", () => {
      vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
        throw new Error("Error de escritura");
      });

      expect(() => localFileManager.write("Prueba")).not.toThrow();
    });
  });

  describe("CloudFileManager", () => {
    let cloudFileManager: CloudFileManager;

    beforeEach(() => {
      cloudFileManager = new CloudFileManager("testCloud.txt");
    });

    it("debería guardar y leer archivos correctamente en la nube", () => {
      cloudFileManager.write("Contenido en la nube");
      expect(cloudFileManager.read()).toBe("Contenido en la nube");
    });

    it("debería devolver una cadena vacía si el archivo no existe en la nube", () => {
      expect(cloudFileManager.read()).toBe("");
    });
  });

  describe("FileService", () => {
    let fileService: FileService;
    let mockFileManager: { read: () => string; write: (data: string) => void };

    beforeEach(() => {
      mockFileManager = {
        read: vi.fn().mockReturnValue("Contenido simulado"),
        write: vi.fn(),
      };
      fileService = new FileService(mockFileManager);
    });

    it("debería leer usando FileService", () => {
      expect(fileService.readFile()).toBe("Contenido simulado");
      expect(mockFileManager.read).toHaveBeenCalled();
    });

    it("debería escribir usando FileService", () => {
      fileService.writeFile("Nuevo contenido");
      expect(mockFileManager.write).toHaveBeenCalledWith("Nuevo contenido");
    });
  });
});