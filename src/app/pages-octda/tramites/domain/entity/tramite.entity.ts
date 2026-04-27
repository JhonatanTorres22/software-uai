export type EstadoTramite =
  | 'ingresado'
  | 'pendiente'
  | 'aprobado'
  | 'improcedente'
  | 'observado';

export type RolSolicitante = 'alumno' | 'docente' | 'administrativo' | 'externo';

export type PrioridadTramite = 'urgente' | 'alta' | 'media' | 'baja';

export interface ListarTramite {
  id: number;
  codigo: string;
  solicitante: string;
  rol: RolSolicitante;
  tipo: string;
  fechaTramite: string;
  plazo: string;
  areaDestino: string;
  prioridad: PrioridadTramite;
  estado: EstadoTramite;
  descripcion?: string;
  observacion?: string;
}