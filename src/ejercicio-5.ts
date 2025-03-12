// El original incumplía el Principio de Inversión de Dependencias (DIP).
// "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones."
// La clase Notifier dependía directamente de las clases concretas EmailService y ShortMessageService.
// Si queremos agregar otro servicio de notificación (como WhatsApp o Push Notifications), tendríamos que modificar Notifier, lo que viola el principio de Abierto/Cerrado (OCP).

// interface NotificationService {
//     notify(message: string): void;
//   }

//   class EmailService implements NotificationService {
//     notify(message: string): void {
//       console.log(`Sending notification by email: ${message}`);
//     }
//   }
  

//   class ShortMessageService implements NotificationService {
//     notify(message: string): void {
//       console.log(`Sending notification by SMS: ${message}`);
//     }
//   }
  

//   class WhatsAppService implements NotificationService {
//     notify(message: string): void {
//       console.log(`Sending notification by WhatsApp: ${message}`);
//     }
//   }
  

//   class Notifier {
//     constructor(private notificationService: NotificationService) {}
  
//     sendNotification(message: string): void {
//       this.notificationService.notify(message);
//     }
//   }
  

//   const emailNotifier = new Notifier(new EmailService());
//   emailNotifier.sendNotification("Hello World!"); 
  
//   const smsNotifier = new Notifier(new ShortMessageService());
//   smsNotifier.sendNotification("Hello World!"); 
  
//   const whatsappNotifier = new Notifier(new WhatsAppService());
//   whatsappNotifier.sendNotification("Hello World!"); 