export type EstadoTramite = 'activo' | 'en-revision' | 'suspendido' | 'piloto';
export type PrioridadTramite = 'baja' | 'media' | 'alta' | 'critica';
export type EstadoEtapa = 'pendiente' | 'en-proceso' | 'completado' | 'observado';

export interface SubCategoriaEtapaProceso {
    orden: number;
    nombreArea: string;
    responsable?: string;
    diasEstimados: number;
    estado: EstadoEtapa;
    observaciones?: string;
}

export interface SubCategoriaArchivoRequerido {
    nombreDocumento: string;
    obligatorio: boolean;
    formatosPermitidos: string[];
    tamanoMaximoMb: number;
    observaciones?: string;
    ejemploVisual?: string;
}

export interface SubCategoriaDetalle {
    tiempoEstimadoTotalDias?: number;
    costo?: number | null;
    estado?: EstadoTramite;
    areaResponsablePrincipal?: string;
    prioridad?: PrioridadTramite;
    observacionesImportantes?: string[];
    requisitosPrevios?: string[];
    etapasProceso?: SubCategoriaEtapaProceso[];
    archivosRequeridos?: SubCategoriaArchivoRequerido[];
}

export class ListarSubCategoria {
    constructor(
        public idSubCategoriaTramite: number,
        public idCategoriaTramite: number,
        public nombre: string,
        public descripcion: string,
        public montoTramite : string,
        public detalle?: SubCategoriaDetalle
    ){}
}

export type CrearSubCategoria = Omit<ListarSubCategoria, 'idSubCategoriaTramite'>;

export type EditarSubCategoria = ListarSubCategoria;
export type EliminarSubCategoria = Pick<ListarSubCategoria, 'idSubCategoriaTramite'>;