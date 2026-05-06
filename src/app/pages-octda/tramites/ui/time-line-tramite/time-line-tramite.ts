import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { EstadoTramite, ListarTramite } from '../../domain/entity/tramite.entity';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";

export type EstadoEvento =
  | 'recibido'
  | 'derivado'
  | 'revisado'
  | 'respondido'
  | 'observado'
  | 'finalizado'
  | 'pendiente';

export interface EventoTimeline {
  id: number;
  fecha: string;
  hora: string;
  estado: EstadoEvento;
  area: string;
  accion: string;
  responsable?: string;
  cargo?: string;
  derivadoA?: string;
  observacion?: string;
  esActual: boolean;
  esPendiente?: boolean;
}

interface EstadoEventoConfig {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: string;
}

interface ProgressStep {
  id: number;
  label: string;
  icon: string;
  done: boolean;
  active: boolean;
}

const ESTADO_ORDEN: Record<EstadoTramite, number> = {
  REGISTRANDO: 0,
  INGRESADO: 1,
  PENDIENTE: 2,
  OBSERVADO: 3,
  APROBADO: 4,
  IMPROCEDENTE: 5,
  ANULADO: 6,
};

@Component({
  selector: 'app-time-line-tramite',
  imports: [CommonModule, TagModule, UiIconButton],
  templateUrl: './time-line-tramite.html',
  styleUrl: './time-line-tramite.scss',
})
export class TimeLineTramite {
  private readonly tramiteSignal = inject(TramiteSignal);

  readonly close = output<void>();

  get tramite(): ListarTramite {
    return this.tramiteSignal.selectTramite();
  }

  get eventos(): EventoTimeline[] {
    return this.generarEventos(this.tramite);
  }

  get progressSteps(): ProgressStep[] {
    const current = ESTADO_ORDEN[this.tramite.estado] ?? ESTADO_ORDEN.INGRESADO;

    return [
      { id: 0, label: 'Registrando', icon: 'pi-pencil', done: current >= 0, active: current === 0 },
      { id: 1, label: 'Ingresado', icon: 'pi-file-import', done: current >= 1, active: current === 1 },
      { id: 2, label: 'En OCTDA', icon: 'pi-building', done: current >= 2, active: current === 2 },
      { id: 3, label: 'Revision', icon: 'pi-search', done: current >= 3, active: current === 3 },
      { id: 4, label: 'Respuesta', icon: 'pi-reply', done: current >= 4, active: current === 4 },
      { id: 5, label: 'Finalizado', icon: 'pi-check-circle', done: current >= 5, active: current === 5 },
      { id: 6, label: 'Anulado', icon: 'pi-ban', done: current >= 6, active: current === 6 },
    ];
  }

  readonly estadoConfig: Record<EstadoEvento, EstadoEventoConfig> = {
    recibido:   { label: 'Recibido',   color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', icon: 'pi-inbox' },
    derivado:   { label: 'Derivado',   color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', icon: 'pi-send' },
    revisado:   { label: 'Revisado',   color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc', icon: 'pi-search' },
    respondido: { label: 'Respondido', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', icon: 'pi-reply' },
    observado:  { label: 'Observado',  color: '#d97706', bg: '#fffbeb', border: '#fde68a', icon: 'pi-exclamation-triangle' },
    finalizado: { label: 'Finalizado', color: '#15803d', bg: '#f0fdf4', border: '#86efac', icon: 'pi-check-circle' },
    pendiente:  { label: 'Pendiente',  color: '#6b7280', bg: '#f9fafb', border: '#e5e7eb', icon: 'pi-clock' },
  };

  getEventoConfig(estado: EstadoEvento): EstadoEventoConfig {
    return this.estadoConfig[estado];
  }

  getEstadoSeverity(estado: EstadoTramite): 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary' {
    const map: Record<EstadoTramite, 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary'> = {
      REGISTRANDO: 'secondary',
      INGRESADO:    'info',
      PENDIENTE:    'warn',
      APROBADO:     'success',
      IMPROCEDENTE: 'danger',
      OBSERVADO:    'contrast',
      ANULADO:      'danger',
    };
    return map[estado] ?? 'secondary';
  }

  getEstadoLabel(estado: EstadoTramite): string {
    const map: Record<EstadoTramite, string> = {
      REGISTRANDO: 'REGISTRANDO',
      INGRESADO:    'INGRESADO',
      PENDIENTE:    'PENDIENTE',
      APROBADO:     'APROBADO',
      IMPROCEDENTE: 'IMPROCEDENTE',
      OBSERVADO:    'OBSERVADO',
      ANULADO:      'ANULADO',
    };
    return map[estado] ?? estado;
  }

  getSolicitanteNombreCompleto(): string {
    return [this.tramite.nombreSolicitante, this.tramite.apePaternoSolicitante, this.tramite.apeMaternoSolicitante]
      .filter(Boolean)
      .join(' ')
      .trim();
  }

  private generarEventos(tramite: ListarTramite): EventoTimeline[] {
    const base = tramite.fechaTramiteCreacion ? new Date(tramite.fechaTramiteCreacion) : new Date();
    const addH = (h: number) => new Date(base.getTime() + h * 3_600_000);
    const addD = (d: number) => new Date(base.getTime() + d * 86_400_000);
    const fD = (dt: Date) => dt.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const fT = (dt: Date) => dt.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });

    const ev: EventoTimeline[] = [];
    const estado = tramite.estado;

    // ── 1. Mesa de Partes: Recepción ──────────────────────────────────────
    ev.push({
      id: 1,
      fecha: fD(base), hora: fT(base),
      estado: 'recibido',
      area: 'Mesa de Partes',
      accion: 'Trámite recibido y registrado en el sistema institucional',
      responsable: 'Lic. Rosa Mendoza Quispe',
      cargo: 'Técnico Administrativo — Mesa de Partes',
      esActual: estado === 'INGRESADO',
    });

    if (estado === 'INGRESADO') {
      ev.push({
        id: 2, fecha: '—', hora: '—',
        estado: 'pendiente', area: 'OCTDA',
        accion: 'Pendiente de derivación al Área de OCTDA',
        esActual: false, esPendiente: true,
      });
      return ev;
    }

    // ── 2. Derivación a OCTDA ─────────────────────────────────────────────
    ev.push({
      id: 2,
      fecha: fD(addH(2)), hora: fT(addH(2)),
      estado: 'derivado',
      area: 'Mesa de Partes',
      accion: 'Documentación derivada al Área de OCTDA para evaluación',
      responsable: 'Lic. Rosa Mendoza Quispe',
      cargo: 'Técnico Administrativo — Mesa de Partes',
      derivadoA: 'Dra. Carmen Huanca Ticona — Jefa de OCTDA',
      esActual: false,
    });

    // ── 3. Recepción en OCTDA ─────────────────────────────────────────────
    ev.push({
      id: 3,
      fecha: fD(addH(4)), hora: fT(addH(4)),
      estado: 'recibido',
      area: 'OCTDA',
      accion: 'Trámite recibido en OCTDA y asignado para revisión',
      responsable: 'Sec. Marleny Quispe Ramos',
      cargo: 'Secretaria de OCTDA',
      esActual: estado === 'PENDIENTE',
    });

    if (estado === 'PENDIENTE') {
      ev.push({
        id: 4, fecha: '—', hora: '—',
        estado: 'pendiente', area: 'OCTDA',
        accion: 'Pendiente de revisión por la Jefa de OCTDA',
        esActual: false, esPendiente: true,
      });
      return ev;
    }

    // ── 4. Revisión Jefa OCTDA ────────────────────────────────────────────
    ev.push({
      id: 4,
      fecha: fD(addD(1)), hora: fT(addD(1)),
      estado: 'revisado',
      area: 'OCTDA',
      accion: 'Expediente revisado y evaluado por la Jefa del Área de OCTDA',
      responsable: 'Dra. Carmen Huanca Ticona',
      cargo: 'Jefa del Área de OCTDA',
      esActual: false,
    });

    // ── 5. Observado ──────────────────────────────────────────────────────
    if (estado === 'OBSERVADO') {
      ev.push({
        id: 5,
        fecha: fD(addD(1.5)), hora: fT(addD(1.5)),
        estado: 'observado',
        area: 'OCTDA',
        accion: 'Expediente observado — Requiere subsanación de documentos',
        responsable: 'Dra. Carmen Huanca Ticona',
        cargo: 'Jefa del Área de OCTDA',
        esActual: true,
      });
      return ev;
    }

    // ── 5. Derivación a Secretaría ────────────────────────────────────────
    ev.push({
      id: 5,
      fecha: fD(addD(2)), hora: fT(addD(2)),
      estado: 'derivado',
      area: 'OCTDA',
      accion: 'Expediente derivado a Secretaría General para emisión de resolución',
      responsable: 'Dra. Carmen Huanca Ticona',
      cargo: 'Jefa del Área de OCTDA',
      derivadoA: 'Lic. Jorge Mamani Huanca — Secretario General',
      esActual: false,
    });

    // ── 6. Respuesta Secretaría ───────────────────────────────────────────
    const esAprobado = estado === 'APROBADO';
    ev.push({
      id: 6,
      fecha: fD(addD(3)), hora: fT(addD(3)),
      estado: 'respondido',
      area: 'Secretaría General',
      accion: esAprobado
        ? 'Resolución de aprobación emitida y notificada al solicitante'
        : 'Resolución de improcedencia emitida y notificada al solicitante',
      responsable: 'Lic. Jorge Mamani Huanca',
      cargo: 'Secretario General',
      esActual: false,
    });

    // ── 7. Finalizado ─────────────────────────────────────────────────────
    ev.push({
      id: 7,
      fecha: fD(addD(3.5)), hora: fT(addD(3.5)),
      estado: 'finalizado',
      area: 'Sistema',
      accion: esAprobado
        ? 'Trámite concluido satisfactoriamente — Resolución registrada'
        : 'Trámite archivado — Resolución de improcedencia registrada',
      esActual: true,
    });

    return ev;
  }
}
