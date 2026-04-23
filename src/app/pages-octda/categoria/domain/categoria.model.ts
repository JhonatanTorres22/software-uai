export interface Area {
  nombre: string;
  sla: number; // días
}

export interface Documento {
  nombre: string;
  tipo: 'PDF' | 'Image' | 'Word';
  requerido: boolean;
}

export interface Subcategoria {
  id: number;
  nombre: string;
  descripcion: string;
  costo: number;
  requiereDocumentos: boolean;
  documentos: Documento[];
  areas: Area[];
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion : string
  subcategorias: Subcategoria[];
}

export type CrearCategoria = Omit<Categoria, 'id' | 'subcategorias'>

export type EditarCategoria = Omit<Categoria, 'subcategorias'>