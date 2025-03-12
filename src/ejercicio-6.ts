// El original no cumplía con el Principio de Sustitución de Liskov (LSP).
// "Si una clase hija sustituye a su clase base, el programa no debe romperse ni cambiar su comportamiento esperado."
// Penguin heredaba de Bird, pero no puede volar.
// Penguin heredaba el método fly(), lo que es incorrecto porque un pingüino no debería volar.
// Si intentabamos llamar fly() en un Penguin, estaríamos representando mal la realidad.

/**
 * Interfaz de tipo volador
 */
export interface Flyable {
  /**
   * Función de interfaz que implementarán los pájaros voladores
   */
  fly(): void;
}
/**
 * Clase abstracta de Pájaro 
 */
export abstract class Bird {
  /**
   * Función abstracta de ruido que interpretaran las clases hijas
   */
  abstract makeSound(): void; 
}
/**
 * Clase Sparrow, representante del animal volador
 */
export class Sparrow extends Bird implements Flyable {
  /**
   * Interpretación de la función de la interfaz por parte de Sparrow
   */
  fly(): void {
    console.log("Sparrow is flying...");
  }
  /**
   * Interpretación del sonido de un Sparrow
   */
  makeSound(): void {
    console.log("Chirp chirp!");
  }
}
/**
 * Clase Pinguino, representante del animal, que es pájaro pero no vuela
 */
export class Penguin extends Bird {
  /**
   * Interpretación de su sonido
   */
  makeSound(): void {
    console.log("Honk honk!");
  }
  /**
   * Interpretación de si está nadando o no
   */
  swim(): void {
    console.log("Penguin is swimming...");
  }
}