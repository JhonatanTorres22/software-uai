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
  private static readonly destructivePattern = /eliminar|eliminacion|eliminaci[oó]n|borrar|suprimir|delete|remover/i;

  private readonly defaults: Record<ConfirmType, ConfirmVisualConfig> = {
    question: {
      icon: 'pi pi-question-circle ui-confirm-type-question',
      acceptButtonStyleClass: 'p-button-primary'
    },
    success: {
      icon: 'pi pi-check-circle ui-confirm-type-success',
      acceptButtonStyleClass: 'p-button-success'
    },
    error: {
      icon: 'pi pi-times-circle ui-confirm-type-error',
      acceptButtonStyleClass: 'p-button-danger'
    },
    info: {
      icon: 'pi pi-info-circle ui-confirm-type-info',
      acceptButtonStyleClass: 'p-button-info'
    },
    warning: {
      icon: 'pi pi-exclamation-triangle ui-confirm-type-warning',
      acceptButtonStyleClass: 'p-button-warning'
    }
  };

  constructor(private readonly confirmationService: ConfirmationService) {}

  open(options: ConfirmOptions): void {
    const type = options.type ?? 'question';
    const visual = this.defaults[type];
    const isDestructive = this.isDestructiveAction(options);

    this.confirmationService.confirm({
      header: options.title ?? 'Confirmar accion',
      message: options.message,
      icon: visual.icon,
      acceptLabel: options.acceptLabel ?? 'Aceptar',
      rejectLabel: options.rejectLabel ?? 'Cancelar',
      acceptButtonStyleClass: isDestructive ? 'p-button-danger' : visual.acceptButtonStyleClass,
      rejectButtonStyleClass: 'p-button-text p-button-secondary',
      accept: options.onAccept,
      reject: options.onReject
    });
  }

  private isDestructiveAction(options: ConfirmOptions): boolean {
    const source = `${options.title ?? ''} ${options.message}`;
    return ConfirmDialogService.destructivePattern.test(source);
  }
}

export type { ConfirmOptions };