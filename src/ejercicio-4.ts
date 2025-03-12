// El código original violaba el Principio de Segregación de Interfaces (ISP).
// "Ninguna clase debe estar obligada a implementar interfaces que no usa."
// La interfaz PrintableScannable combinaba dos responsabilidades: impresión y escaneo.
// La clase Printer implementaba PrintableScannable, pero no usa scan().
// La clase Scanner implementaba PrintableScannable, pero no usa print().
// Ambas clases estaban obligadas a implementar métodos innecesarios, lo que viola ISP.

// interface Printable {
//     print(): void;
//   }
  
//   interface Scannable {
//     scan(): void;
//   }
  

//   class Printer implements Printable {
//     print(): void {
//       console.log("Printing...");
//     }
//   }
  
//   class Scanner implements Scannable {
//     scan(): void {
//       console.log("Scanning...");
//     }
//   }
  

//   class PrinterScanner implements Printable, Scannable {
//     print(): void {
//       console.log("Printing...");
//     }
  
//     scan(): void {
//       console.log("Scanning...");
//     }
//   }
  

//   const printer = new Printer();
//   printer.print(); 
  
//   const scanner = new Scanner();
//   scanner.scan(); 
  
//   const printerScanner = new PrinterScanner();
//   printerScanner.print(); 
//   printerScanner.scan(); 