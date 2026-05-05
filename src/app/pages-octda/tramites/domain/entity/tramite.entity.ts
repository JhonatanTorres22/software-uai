export type EstadoTramite =
  | 'INGRESADO'
  | 'PENDIENTE'
  | 'APROBADO'
  | 'IMPROCEDENTE'
  | 'OBSERVADO'
  | 'ANULADO';

export type RolSolicitante = 'alumno' | 'docente' | 'administrativo' | 'externo';


export interface ListarTramite {
  idTramite: number;
  idSubCategoriaTramite: number;
  codigoExpediente: string;
  estado: EstadoTramite;
  nombreSubcategoriaTramite: string;
  tipoDoc: string;
  numeroDoc: string;
  tipoSolicitante: RolSolicitante;
  nombreSolicitante: string;
  apePaternoSolicitante: string;
  apeMaternoSolicitante: string;
  celularSolicitante: string;
  correoSolicitante: string;
  asunto: string;
  archivoAnexo: string;
  fechaTramiteCreacion: string;
}
 export interface CrearTramite {
  idSubCategoriaTramite: number;
  tipoDoc: string;
  numeroDoc: string;
  tipoSolicitante: string;
  nombreSolicitante: string;
  apePaternoSolicitante: string;
  apeMaternoSolicitante: string;
  celularSolicitante: string;
  correoSolicitante: string;
  asunto: string;
  archivoAnexo: string;
 }

 export type EditarTramite = CrearTramite & {
     idTramite: number;
 }

 export type EliminarTramite = Pick<ListarTramite, 'idTramite'>;

 export interface ListarFormatoSolicitud{
    idFormatoSolicitud: number;
    idTramite: number;
    nombreDestinatario: string;
    mombresYApellidos: string;
    carreraProfesional : string,
    semestre: string;
    turno: string;
    celularSolicitante: string;
    nCarnet: string,
    nDocumento: string;
    correoSolicitante:string,
    domicilioSolicitante: string;
    facebook: string;
    fundamento: string;
    fechaCreacion: string;
 }


 export type EditarFormatoSolicitud = Omit<ListarFormatoSolicitud, 'fechaCreacion'>
 export type CrearFormatoSolicitud = Omit<ListarFormatoSolicitud, 'idFormatoSolicitud' | 'fechaCreacion'>;
 export type EliminarFormatoSolicitud = Pick<ListarFormatoSolicitud, 'idFormatoSolicitud'>;