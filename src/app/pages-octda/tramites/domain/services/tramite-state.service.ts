import { computed, Injectable, signal } from '@angular/core';
import { FormatoSolicitudData } from '../entity/formato-solicitud.model';

export interface DatosTramiteSnapshot {
  tipoDoc: string;
  numeroDoc: string;
  nombreSolicitante: string;
  apePaternoSolicitante: string;
  apeMaternoSolicitante: string;
  celularSolicitante: string;
  correoSolicitante: string;
  idCategoriaTramite: string;
  idSubCategoriaTramite: string;
  asunto: string;
  archivoAnexo: string;
  numeroVoucher: string;
  fechaPago: string;
  horaPago: string;
  montoPago: string;
}

export interface FormatoSolicitudSnapshot {
  idFormatoSolicitud: number;
  destinatario: string;
  datosUsuario: string;
  numeroContacto: string;
  numeroDocumento: string;
  email: string;
  fundamento: string;
  anexos: string;
  fecha: string;
  firma: string;
  conformidad: boolean;
}

@Injectable({ providedIn: 'root' })
export class TramiteStateService {
  readonly idTramite = signal<number>(0);
  readonly idFormatoSolicitud = signal<number>(0);
  readonly solicitudData = signal<FormatoSolicitudData | null>(null);
  readonly datosTramiteSnapshot = signal<DatosTramiteSnapshot | null>(null);
  readonly formatoSolicitudSnapshot = signal<FormatoSolicitudSnapshot | null>(null);
  readonly isEditMode = computed(() => this.idTramite() > 0);

  reset(): void {
    this.idTramite.set(0);
    this.idFormatoSolicitud.set(0);
    this.solicitudData.set(null);
    this.datosTramiteSnapshot.set(null);
    this.formatoSolicitudSnapshot.set(null);
  }
}
