import { Injectable, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UiModal } from '../components/ui-modal/ui-modal';

/* ─────────────────────────────
   FOOTER CONFIG
───────────────────────────── */
export interface ModalFooterConfig {
  primaryLabel?: string;
  cancelLabel?: string;
  primaryColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  cancelColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  showPrimary?: boolean;
  showCancel?: boolean;
}

/* ─────────────────────────────
   MODAL CONFIG
───────────────────────────── */
export interface ModalConfig {
  header?: string;
  width?: string;

  data?: Record<string, unknown>;

  footer?: ModalFooterConfig;

  dismissableMask?: boolean;
  maximizable?: boolean;

  [key: string]: unknown;
}

/* ─────────────────────────────
   DEFAULT FOOTER
───────────────────────────── */
const DEFAULT_FOOTER: ModalFooterConfig = {
  primaryLabel: 'Guardar',
  cancelLabel: 'Cancelar',
  primaryColor: 'primary',
  cancelColor: 'secondary',
  showPrimary: true,
  showCancel: true
};

/* ─────────────────────────────
   SERVICE
───────────────────────────── */
@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly dialogService: DialogService) {}

  open<T>(component: Type<T>, config: ModalConfig = {}): DynamicDialogRef {
    const {
      header = '',
      width = 'min(90vw, 560px)',
      dismissableMask = true,
      maximizable = false,
      data,
      footer,
      ...rest
    } = config;

    const finalFooter: ModalFooterConfig = {
      ...DEFAULT_FOOTER,
      ...footer
    };

    return this.dialogService.open(UiModal, {
      ...rest,

      header: ' ',
      showHeader: true,
      width,
      dismissableMask,
      maximizable,
      draggable: true,
      keepInViewport: true,

      contentStyle: {
        padding: '0',
        overflow: 'hidden'
      },

      data: {
        title: header,
        component,
        payload: data ?? {},
        footer: finalFooter
      },

      modal: true,
      closable: false,
      styleClass: 'ui-modal-wrapper'
    })!;
  }
}