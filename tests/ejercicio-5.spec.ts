import { describe, it, expect, vi } from 'vitest';
import { EmailService, ShortMessageService, WhatsAppService, Notifier } from '../src/ejercicio-5.ts';

// Mock de console.log
vi.stubGlobal('console', { log: vi.fn() });

describe('NotificationService', () => {
  it('should send email notification', () => {
    const emailService = new EmailService();
    const message = 'Test email notification';
    
    // Llamar al método notify
    emailService.notify(message);
    
    // Verificar que se haya llamado a console.log con el mensaje adecuado
    expect(console.log).toHaveBeenCalledWith(`Sending notification by email: ${message}`);
  });

  it('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const message = 'Test SMS notification';
    
    smsService.notify(message);
    
    expect(console.log).toHaveBeenCalledWith(`Sending notification by SMS: ${message}`);
  });

  it('should send WhatsApp notification', () => {
    const whatsappService = new WhatsAppService();
    const message = 'Test WhatsApp notification';
    
    whatsappService.notify(message);
    
    expect(console.log).toHaveBeenCalledWith(`Sending notification by WhatsApp: ${message}`);
  });
});

describe('Notifier', () => {
  it('should send notification via email service', () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);
    const message = 'Test email notification';

    notifier.sendNotification(message);

    expect(console.log).toHaveBeenCalledWith(`Sending notification by email: ${message}`);
  });

  it('should send notification via SMS service', () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);
    const message = 'Test SMS notification';

    notifier.sendNotification(message);

    expect(console.log).toHaveBeenCalledWith(`Sending notification by SMS: ${message}`);
  });

  it('should send notification via WhatsApp service', () => {
    const whatsappService = new WhatsAppService();
    const notifier = new Notifier(whatsappService);
    const message = 'Test WhatsApp notification';

    notifier.sendNotification(message);

    expect(console.log).toHaveBeenCalledWith(`Sending notification by WhatsApp: ${message}`);
  });
});