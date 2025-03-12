import { describe, it, expect, vi } from 'vitest';
import { Sparrow, Penguin } from '../src/ejercicio-6.ts'; 

// Mock de console.log
vi.stubGlobal('console', { log: vi.fn() });

describe('Sparrow class', () => {
  it('should fly and make sound', () => {
    const sparrow = new Sparrow();
    const flyMessage = 'Sparrow is flying...';
    const soundMessage = 'Chirp chirp!';
    
    // Llamar a los métodos
    sparrow.fly();
    sparrow.makeSound();
    
    // Verificar los resultados en console.log
    expect(console.log).toHaveBeenCalledWith(flyMessage);
    expect(console.log).toHaveBeenCalledWith(soundMessage);
  });
});

describe('Penguin class', () => {
  it('should make sound and swim', () => {
    const penguin = new Penguin();
    const soundMessage = 'Honk honk!';
    const swimMessage = 'Penguin is swimming...';
    
    // Llamar a los métodos
    penguin.makeSound();
    penguin.swim();
    
    // Verificar los resultados en console.log
    expect(console.log).toHaveBeenCalledWith(soundMessage);
    expect(console.log).toHaveBeenCalledWith(swimMessage);
  });
});