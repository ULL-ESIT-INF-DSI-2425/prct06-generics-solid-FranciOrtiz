import { describe, expect, test, vi } from 'vitest';
import {Printable, Printer, PrinterScanner, Scannable, Scanner} from "../src/ejercicio-4.ts"

describe('Printer', () => {
  test('should print correctly', () => {
    const printer = new Printer();
    const consoleSpy = vi.spyOn(console, 'log');
    printer.print();
    expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    consoleSpy.mockRestore();
  });
});

describe('Scanner', () => {
  test('should scan correctly', () => {
    const scanner = new Scanner();
    const consoleSpy = vi.spyOn(console, 'log');
    scanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    consoleSpy.mockRestore();
  });
});

describe('PrinterScanner', () => {
  test('should print and scan correctly', () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, 'log');
    
    printerScanner.print();
    expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    
    printerScanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    
    consoleSpy.mockRestore();
  });
});
