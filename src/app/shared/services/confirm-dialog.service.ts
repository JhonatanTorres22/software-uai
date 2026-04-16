import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmType } from '../models/api-response.model';

type ConfirmCallback = () => void;

interface ConfirmOptions {
  type?: ConfirmType;
  title?: string;
  message: string;
  onAccept?: ConfirmCallback;
  onReject?: ConfirmCallback;
  acceptLabel?: string;
  rejectLabel?: string;
}

interface ConfirmVisualConfig {
  icon: string;
  acceptButtonStyleClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  private readonly defaults: Record<ConfirmType, ConfirmVisualConfig> = {
    question: {
      icon: 'pi pi-question-circle',
      acceptButtonStyleClass: 'p-button-primary'
    },
    success: {
      icon: 'pi pi-check-circle',
      acceptButtonStyleClass: 'p-button-success'
    },
    error: {
      icon: 'pi pi-times-circle',
      acceptButtonStyleClass: 'p-button-danger'
    },
    info: {
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-info'
    },
    warning: {
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-warning'
    }
  };

  constructor(private readonly confirmationService: ConfirmationService) {}

  open(options: ConfirmOptions): void {
    const type = options.type ?? 'question';
    const visual = this.defaults[type];

    this.confirmationService.confirm({
      header: options.title ?? 'Confirmar accion',
      message: options.message,
      icon: visual.icon,
      acceptLabel: options.acceptLabel ?? 'Aceptar',
      rejectLabel: options.rejectLabel ?? 'Cancelar',
      acceptButtonStyleClass: visual.acceptButtonStyleClass,
      rejectButtonStyleClass: 'p-button-text p-button-secondary',
      accept: options.onAccept,
      reject: options.onReject
    });
  }
}

export type { ConfirmOptions };