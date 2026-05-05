import { FormArray } from "@angular/forms";
import { CrearFormatoSolicitud, CrearTramite, EditarFormatoSolicitud, EditarTramite, EliminarFormatoSolicitud, EliminarTramite, EstadoTramite, ListarFormatoSolicitud, ListarTramite, RolSolicitante } from "../../domain/entity/tramite.entity";
import { CrearFormatoSolicitudDTO, CrearTramiteDTO, EditarFormatoSolicitudDTO, EditarTramiteDTO, EliminarFormatoSolicitudDTO, EliminarTramiteDTO, ListarFormatoSolicitudDTO, ListarTramiteDTO } from "../dto/tramite.dto";

export class TramiteMapper {
    static toDomainTramite(tramite: ListarTramiteDTO): ListarTramite {
        return {
            idTramite: Number(tramite.codigoTramite ?? 0),
            idSubCategoriaTramite: Number(tramite.codigoSubCategoriaTramite ?? 0),
            codigoExpediente: String(tramite.codigoInternoTramite ?? ''),
            estado: this.mapEstado(tramite.estado ?? tramite.estado ?? tramite.estado ?? ''),
            nombreSubcategoriaTramite: String(tramite.nombreSubCategoriaTramite ?? ''),
            tipoDoc: String(tramite.tipoDocumento ?? ''),
            numeroDoc: String(tramite.numeroDocumento ?? ''),
            tipoSolicitante: this.mapTipoSolicitante(tramite.tipoRemitente ?? ''),
            nombreSolicitante: String(tramite.nombres ?? ''),
            apePaternoSolicitante: String(tramite.apellidoPaterno ?? ''),
            apeMaternoSolicitante: String(tramite.apellidoMaterno ?? ''),
            celularSolicitante: String(tramite.telefono ?? ''),
            correoSolicitante: String(tramite.correo ?? ''),
            asunto: String(tramite.asunto ?? ''),
            archivoAnexo: String(tramite.archivoAnexo ?? ''),
            fechaTramiteCreacion: String(tramite.fechaCreacion ?? ''),
        };
    }

    static toApiCrearTramite(crear: CrearTramite): CrearTramiteDTO {
        return {
            codigoSubCategoriaTramite: crear.idSubCategoriaTramite,
            tipoDocumento: crear.tipoDoc,
            numeroDocumento: crear.numeroDoc,
            tipoRemitente: crear.tipoSolicitante,
            nombres: crear.nombreSolicitante,
            apellidoPaterno: crear.apePaternoSolicitante,
            apellidoMaterno: crear.apeMaternoSolicitante,
            telefono: crear.celularSolicitante,
            correo: crear.correoSolicitante,
            asunto: crear.asunto,
            archivoAnexo: crear.archivoAnexo,
        }
    }

    static toApiEditarTramite(editar: EditarTramite): EditarTramiteDTO {
        return {
            codigoTramite: editar.idTramite,
            tipoDocumento: editar.tipoDoc,
            numeroDocumento: editar.numeroDoc,
            tipoRemitente: editar.tipoSolicitante,
            nombres: editar.nombreSolicitante,
            apellidoMaterno: editar.apeMaternoSolicitante,
            apellidoPaterno: editar.apePaternoSolicitante,
            asunto: editar.asunto,
            telefono: editar.celularSolicitante,
            codigoSubCategoriaTramite: editar.idSubCategoriaTramite,
            correo: editar.correoSolicitante,
            archivoAnexo: editar.archivoAnexo,
        }
    }

    static toApiEliminarTramite(eliminar: EliminarTramite): EliminarTramiteDTO {
        return {
            codigoTramite: eliminar.idTramite,
        }
    }

    static toDomainFormatoSolicitud(formato: ListarFormatoSolicitudDTO): ListarFormatoSolicitud {
        return {
            idFormatoSolicitud : formato.codigoFormatoSolicitud,
            idTramite: formato.codigoTramite,
            nombreDestinatario: formato.destinatario,
            mombresYApellidos: formato.datosDelUsuario,
            carreraProfesional: formato.carreraProfesional,
            semestre: formato.semestre,
            turno: formato.turno,
            celularSolicitante: formato.numeroContacto,
            nCarnet: formato.numeroCarnet,
            nDocumento: formato.numeroDocumento,
            correoSolicitante: formato.email,
            domicilioSolicitante: formato.damicilioDelUsuario,
            facebook: formato.facebook,
            fundamento: formato.fundamento,
            fechaCreacion: formato.fechaCreacion,
        }
    }

    static toApiCrearFormatoSolicitud(formato: CrearFormatoSolicitud) : CrearFormatoSolicitudDTO{
        return{
            codigoTramite: formato.idTramite,
            destinatario: formato.nombreDestinatario,
            datosDelUsuario: formato.mombresYApellidos,
            carreraProfesional: formato.carreraProfesional,
            semestre: formato.semestre,
            turno: formato.turno,
            numeroContacto: formato.celularSolicitante,
            numeroCarnet: formato.nCarnet,
            numeroDocumento: formato.nDocumento,
            email: formato.correoSolicitante,
            damicilioDelUsuario: formato.domicilioSolicitante,
            facebook: formato.facebook,
            fundamento: formato.fundamento,
        }
    }

    static toApiEditarFormatoSolicitud(formato: EditarFormatoSolicitud) : EditarFormatoSolicitudDTO{
        return{
            codigoFormatoSolicitud: formato.idFormatoSolicitud,
            codigoTramite: formato.idTramite,
            destinatario: formato.nombreDestinatario,
            datosDelUsuario: formato.mombresYApellidos,
            carreraProfesional: formato.carreraProfesional,
            semestre: formato.semestre,
            turno: formato.turno,
            numeroContacto: formato.celularSolicitante,
            numeroCarnet: formato.nCarnet,
            numeroDocumento: formato.nDocumento,
            email: formato.correoSolicitante,
            damicilioDelUsuario: formato.domicilioSolicitante,
            facebook: formato.facebook,
            fundamento: formato.fundamento,
        }
    }

    static toApiEliminarFormatoSolicitud(formato: EliminarFormatoSolicitud) : EliminarFormatoSolicitudDTO{
        return{
            codigoFormatoSolicitud: formato.idFormatoSolicitud,
        }
    }

    private static mapEstado(estado: string): EstadoTramite {
        const normalized = estado.trim().toLowerCase();

        if (normalized.includes('ingres')) {
            return 'INGRESADO';
        }

        if (normalized.includes('aproba')) {
            return 'APROBADO';
        }

        if (normalized.includes('improce')) {
            return 'IMPROCEDENTE';
        }

        if (normalized.includes('observ')) {
            return 'OBSERVADO';
        }

        if (normalized.includes('pend')) {
            return 'PENDIENTE';
        }
        if (normalized.includes('anul')) {
            return 'ANULADO';
        }

        return 'PENDIENTE';
    }

    private static mapTipoSolicitante(tipoRemitente: string): RolSolicitante {
        const normalized = tipoRemitente.trim().toLowerCase();

        if (normalized.includes('docen')) {
            return 'docente';
        }

        if (normalized.includes('admin')) {
            return 'administrativo';
        }

        if (normalized.includes('extern')) {
            return 'externo';
        }

        return 'alumno';
    }


}
