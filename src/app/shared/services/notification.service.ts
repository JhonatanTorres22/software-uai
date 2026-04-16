import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotificationType } from '../models/api-response.model';

interface NotificationConfig {
  summary: string;
  life: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly defaults: Record<NotificationType, NotificationConfig> = {
    success: { summary: 'Operacion exitosa', life: 2600 },
    error: { summary: 'Operacion fallida', life: 4200 },
    warn: { summary: 'Atencion', life: 3600 },
    info: { summary: 'Informacion', life: 3000 }
  };

  constructor(private readonly messageService: MessageService) {}

  show(message: string, type: NotificationType = 'info'): void {
    const content = message?.trim();
    if (!content) {
      return;
    }

    const config = this.defaults[type];
    this.messageService.add({
      severity: type,
      summary: config.summary,
      detail: content,
      life: config.life
    });
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string): void {
    this.show(message, 'error');
  }

  warn(message: string): void {
    this.show(message, 'warn');
  }

  info(message: string): void {
    this.show(message, 'info');
  }
}