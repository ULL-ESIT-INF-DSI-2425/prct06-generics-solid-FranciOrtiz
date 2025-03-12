// El código original violaba el Principio de Segregación de Interfaces (ISP).
// "Ninguna clase debe estar obligada a implementar interfaces que no usa."
// La interfaz PrintableScannable combinaba dos responsabilidades: impresión y escaneo.
// La clase Printer implementaba PrintableScannable, pero no usa scan().
// La clase Scanner implementaba PrintableScannable, pero no usa print().
// Ambas clases estaban obligadas a implementar métodos innecesarios, lo que viola ISP.

/**
 * Interfaz destinada a imprimir
 */
export interface Printable {
  /**
   * Función básica de imprimir
   */
  print(): void;
}
/**
 * Interfaz destinada al escaneo
 */
export interface Scannable {
  /**
   * Función básica de escaneo
   */
  scan(): void;
}
/**
 * Clase de una impresora
 */
export class Printer implements Printable {
  /**
   * Función de imprimir de la impresora
   */
  print(): void {
    console.log("Printing...");
  }
}
/**
 * Clase representante de una escáner
 */
export class Scanner implements Scannable {
  /**
   * Función de escaneo de un escáner
   */
  scan(): void {
    console.log("Scanning...");
  }
}
/**
 * Clase reprentativa de una impresora escáner
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Función de imprimir que tiene la improsera escáner
   */
  print(): void {
    console.log("Printing...");
  }
  /**
   * Función de escaner de la impresora escáner
   */
  scan(): void {
    console.log("Scanning...");
  }
}