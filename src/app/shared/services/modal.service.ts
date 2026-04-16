import { Injectable, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UiModal } from '../components/ui-modal/ui-modal';

export interface ModalConfig {
  // Título que aparece en el header del diálogo
  header?: string;
  // Ancho: respeta mobile-first con min(90vw, valor)
  width?: string;
  // Payload que recibirá el componente interno vía DynamicDialogConfig.data
  data?: Record<string, unknown>;
  // Cerrar al hacer click fuera del modal
  dismissableMask?: boolean;
  // Permite maximizar el modal
  maximizable?: boolean;
  // Permite pasar cualquier otro config de PrimeNG sin restricción
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private readonly dialogService: DialogService) {}

  /**
   * Abre cualquier componente Angular dentro de un DynamicDialog.
   *
   * Uso básico:
   *   const ref = this.modalService.open(MiComponente, {
   *     header: 'Título',
   *     data: { payload }
   *   });
   *   ref.onClose.subscribe(result => { ... });
   *
   * @param component  Clase del componente Angular a renderizar dentro del modal.
   * @param config     Configuración opcional: header, width, data, etc.
   * @returns          DynamicDialogRef — permite escuchar el cierre con ref.onClose
   */
open<T>(component: Type<T>, config: ModalConfig = {}): DynamicDialogRef {
  const {
    header = '',
    width = 'min(90vw, 560px)',
    dismissableMask = true,
    maximizable = false,
    data,
    ...rest
  } = config;

  return this.dialogService.open(UiModal, {
    ...rest,
    // Keep PrimeNG header rendered so native dragging remains active.
    header: ' ',
    showHeader: true,
    width,
    dismissableMask,
    maximizable,
    draggable: true,
    keepInViewport: true,
    minX: 0,
    minY: 0,
    // Keep content flush; header handle visuals are controlled in global styles.
    contentStyle: {
      padding: '0',
      margin: '0',
      overflow: 'hidden',
      maxHeight: '82vh'
    },
    data: {
      title: header,
      component,
      payload: data
    },
    modal: true,
    closable: false,
    styleClass: 'ui-modal-wrapper'
  })!; // 🔥 AQUÍ
}
}
