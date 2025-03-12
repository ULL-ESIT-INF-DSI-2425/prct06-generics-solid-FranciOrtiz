// El original no cumplía con el Principio de Sustitución de Liskov (LSP).
// "Si una clase hija sustituye a su clase base, el programa no debe romperse ni cambiar su comportamiento esperado."
// Penguin heredaba de Bird, pero no puede volar.
// Penguin heredaba el método fly(), lo que es incorrecto porque un pingüino no debería volar.
// Si intentabamos llamar fly() en un Penguin, estaríamos representando mal la realidad.


// interface Flyable {
//     fly(): void;
//   }
  

//   abstract class Bird {
//     abstract makeSound(): void; 
//   }
  
 
//   class Sparrow extends Bird implements Flyable {
//     fly(): void {
//       console.log("Sparrow is flying...");
//     }
  
//     makeSound(): void {
//       console.log("Chirp chirp!");
//     }
//   }
  

//   class Penguin extends Bird {
//     makeSound(): void {
//       console.log("Honk honk!");
//     }
  
//     swim(): void {
//       console.log("Penguin is swimming...");
//     }
//   }
  
 
//   const sparrow = new Sparrow();
//   sparrow.fly(); 
//   sparrow.makeSound(); 
  
//   const penguin = new Penguin();
//   penguin.makeSound(); 
//   penguin.swim(); 
