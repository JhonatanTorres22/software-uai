export interface Area {
  nombre: string;
  sla: number; // días
}

export interface Documento {
  nombre: string;
  tipo: 'PDF' | 'Image' | 'Word';
  requerido: boolean;
}

export interface ListarCategoria {
  idCategoriaTramite: number;
  nombre: string;
  descripcion : string
  // subcategorias: Subcategoria[];
}

export type CrearCategoria = Omit<ListarCategoria, 'idCategoriaTramite'>;
export type EditarCategoria = ListarCategoria;
export type EliminarCategoria = Pick<ListarCategoria, 'idCategoriaTramite'>;