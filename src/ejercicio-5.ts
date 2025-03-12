// El original incumplía el Principio de Inversión de Dependencias (DIP).
// "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones."
// La clase Notifier dependía directamente de las clases concretas EmailService y ShortMessageService.
// Si queremos agregar otro servicio de notificación (como WhatsApp o Push Notifications), tendríamos que modificar Notifier, lo que viola el principio de Abierto/Cerrado (OCP).

/**
 * Interfaz de un servicio de notificaciones
 */
export interface NotificationService {
  /**
   * Función abstracta de interfaz que interpretaran las clases que la implementen, siendo esta, la notificación del servicio de mensajería
   * @param message Mensaje que se va a notificar
   */
  notify(message: string): void;
}
/**
 * Clase representativa de un servicio de correo electrónico
 */
export class EmailService implements NotificationService {
  /**
   * Función que notifica al usuario que le ha llegado un correo electrónico
   * @param message Mensaje que será notificado al usuario
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
/**
 * Clase representativa de un servicio de SMS
 */
export class ShortMessageService implements NotificationService {
  /**
   * Función de notificación del SMS
   * @param message Mensaje que se transmitirá en la notificación
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
/**
 * Clase representativa del servicio de Whatsapp
 */
export class WhatsAppService implements NotificationService {
  /**
   * Función de notificación de Whatsapp
   * @param message Mensaje que se mandará en la notificación
   */
  notify(message: string): void {
    console.log(`Sending notification by WhatsApp: ${message}`);
  }
}
/**
 * Clase de Notificadores
 */
export class Notifier {
  /**
   * Constructor principal de la clase
   * @param notificationService Servicio de notificación que va a usar la clase
   */
  constructor(private notificationService: NotificationService) {}
  /**
   * Función que se encarga de mandar las notificaciones en función del servicio utilizado
   * @param message Mensaje que se pasará para notificar
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}