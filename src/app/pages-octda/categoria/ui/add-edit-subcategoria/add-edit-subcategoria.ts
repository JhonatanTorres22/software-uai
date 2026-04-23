import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subcategoria } from '../../domain/categoria.model';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { CdkDragDrop, CdkDropList, CdkDrag, CdkDragHandle, moveItemInArray } from '@angular/cdk/drag-drop';
// import { CdkDragDrop,  moveItemInArray } from '@angular/cdk/drag-drop';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";

// ─── Interfaces internas ──────────────────────────────────────────────
interface AreaOpcion {
  id: number;
  nombre: string;
  icono: string;
}
 
interface AreaForm {
  id: number;
  nombre: string;
  icono: string;
  sla: number;
}
 
interface DocumentoOpcion {
  id: number;
  nombre: string;
  tipo: 'PDF' | 'Image' | 'Word';
}
 
interface DocumentoForm {
  nombre: string;
  tipo: 'PDF' | 'Image' | 'Word';
  requerido: boolean;
}
 
interface SubcategoriaForm {
  nombre: string;
  descripcion: string;
  tieneCosto: boolean;
  costo: number;
  areas: AreaForm[];
  requiereDocumentos: boolean;
  documentos: DocumentoForm[];
}
// ─────────────────────────────────────────────────────────────────────
@Component({
  selector: 'app-add-edit-subcategoria',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DividerModule,
    AutoCompleteModule,
    InputTextModule,
    InputNumberModule,
    TextareaModule,
    SelectModule,
    TagModule,
    ToastModule,
    ToggleSwitchModule,
    UiButtonComponent,
    UiIconButton
],
  templateUrl: './add-edit-subcategoria.html',
  styleUrls: ['./add-edit-subcategoria.scss'],
})
export class AddEditSubcategoria {

  /** Pasar subcategoria para modo edición; null para modo creación */
  @Input() subcategoria: Subcategoria | null = null;
  @Output() guardado = new EventEmitter<Subcategoria>();
  @Output() cancelado = new EventEmitter<void>();
 
  modoEdicion = false;
  submitted = false;
  isDragging = false;
 
  // ── Formulario ────────────────────────────────────────────────────
  form: SubcategoriaForm = {
    nombre: '',
    descripcion: '',
    tieneCosto: false,
    costo: 0,
    areas: [],
    requiereDocumentos: false,
    documentos: [],
  };
 
  // ── Catálogo de áreas disponibles ─────────────────────────────────
  private readonly todasLasAreas: AreaOpcion[] = [
    { id: 1,  nombre: 'Secretaría Académica', icono: 'pi pi-graduation-cap' },
    { id: 2,  nombre: 'Contabilidad',          icono: 'pi pi-calculator' },
    { id: 3,  nombre: 'Rectorado',             icono: 'pi pi-building' },
    { id: 4,  nombre: 'Archivo',               icono: 'pi pi-folder' },
    { id: 5,  nombre: 'Decanato',              icono: 'pi pi-shield' },
    { id: 6,  nombre: 'Registro',              icono: 'pi pi-id-card' },
    { id: 7,  nombre: 'Recursos Humanos',      icono: 'pi pi-users' },
    { id: 8,  nombre: 'Tesorería',             icono: 'pi pi-wallet' },
    { id: 9,  nombre: 'Dirección General',     icono: 'pi pi-star' },
    { id: 10, nombre: 'Sistemas',              icono: 'pi pi-desktop' },
    { id: 11, nombre: 'Bienestar Estudiantil', icono: 'pi pi-heart' },
    { id: 12, nombre: 'Biblioteca',            icono: 'pi pi-book' },
  ];
 
  areasSugeridas: AreaOpcion[] = [];
  areaQuery: AreaOpcion | null = null;
 
  // ── Catálogo de documentos disponibles ────────────────────────────
  private readonly todosLosDocumentos: DocumentoOpcion[] = [
    { id: 1,  nombre: 'Copia DNI',              tipo: 'PDF' },
    { id: 2,  nombre: 'Constancia de Egresado', tipo: 'PDF' },
    { id: 3,  nombre: 'Recibo de Pago',         tipo: 'Image' },
    { id: 4,  nombre: 'Certificado de Idiomas', tipo: 'Image' },
    { id: 5,  nombre: 'Tesis',                  tipo: 'Image' },
    { id: 6,  nombre: 'Sílabo Original',        tipo: 'PDF' },
    { id: 7,  nombre: 'Certificado de Notas',   tipo: 'PDF' },
    { id: 8,  nombre: 'Carta de Presentación',  tipo: 'Word' },
    { id: 9,  nombre: 'Foto Carné',             tipo: 'Image' },
    { id: 10, nombre: 'Recibo Original',        tipo: 'PDF' },
  ];
 
  docsSugeridos: DocumentoOpcion[] = [];
  docQuery: DocumentoOpcion | null = null;
  nuevoDocNombre = '';
 
  // ── Opciones tipo documento para el select ─────────────────────────
  readonly tiposDocumento = [
    { label: 'PDF',   value: 'PDF' },
    { label: 'Imagen', value: 'Image' },
    { label: 'Word',  value: 'Word' },
  ];
 
  // ── Colores para el timeline ───────────────────────────────────────
  private readonly coloresPaleta = [
    '#4F81BD', '#70AD47', '#FFC000', '#ED7D31',
    '#5B9BD5', '#A9D18E', '#9E480E', '#833C00',
  ];
  private readonly coloresLight = [
    '#DDEEFF', '#E9F6E0', '#FFF6D6', '#FDE8D8',
    '#D9ECF9', '#EAF5E2', '#F5E3D4', '#F5E0D4',
  ];
 
  constructor(private messageService: MessageService) {}

  get modalPrimaryLabel(): string {
    return this.modoEdicion ? 'Guardar Cambios' : 'Crear Subcategoría';
  }
 
  ngOnInit(): void {
    if (this.subcategoria) {
      this.modoEdicion = true;
      this.form = {
        nombre: this.subcategoria.nombre,
        descripcion: this.subcategoria.descripcion,
        tieneCosto: this.subcategoria.costo > 0,
        costo: this.subcategoria.costo,
        areas: this.subcategoria.areas.map((a, i) => ({
          id: i + 1,
          nombre: a.nombre,
          icono: this.todasLasAreas.find(x => x.nombre === a.nombre)?.icono ?? 'pi pi-building',
          sla: a.sla,
        })),
        requiereDocumentos: this.subcategoria.requiereDocumentos,
        documentos: this.subcategoria.documentos.map(d => ({
          nombre: d.nombre,
          tipo: d.tipo,
          requerido: d.requerido,
        })),
      };
    }
  }
 
  // ── Áreas ─────────────────────────────────────────────────────────
  buscarAreas(event: { query: string }): void {
    const q = event.query.toLowerCase();
    const yaAgregados = this.form.areas.map(a => a.id);
    this.areasSugeridas = this.todasLasAreas.filter(a =>
      a.nombre.toLowerCase().includes(q) && !yaAgregados.includes(a.id)
    );
  }
 
  agregarArea(event: { value: AreaOpcion }): void {
    const area = event.value;
    this.form.areas.push({ id: area.id, nombre: area.nombre, icono: area.icono, sla: 1 });
    // reset autocomplete
    setTimeout(() => { this.areaQuery = null; }, 0);
  }
 
  eliminarArea(index: number): void {
    this.form.areas.splice(index, 1);
  }
 
  dropArea(event: any): void {
    moveItemInArray(this.form.areas, event.previousIndex, event.currentIndex);
  }
 
  getAreaColor(index: number): string {
    return this.coloresPaleta[index % this.coloresPaleta.length];
  }
 
  getAreaColorLight(index: number): string {
    return this.coloresLight[index % this.coloresLight.length];
  }
 
  get totalDias(): number {
    return this.form.areas.reduce((sum, a) => sum + (a.sla || 0), 0);
  }
 
  // ── Documentos ────────────────────────────────────────────────────
  buscarDocumentos(event: { query: string }): void {
    const q = event.query.toLowerCase();
    const yaAgregados = this.form.documentos.map(d => d.nombre.toLowerCase());
    this.docsSugeridos = this.todosLosDocumentos.filter(d =>
      d.nombre.toLowerCase().includes(q) && !yaAgregados.includes(d.nombre.toLowerCase())
    );
  }
 
  agregarDocumento(event: { value: DocumentoOpcion }): void {
    const doc = event.value;
    this.form.documentos.push({ nombre: doc.nombre, tipo: doc.tipo, requerido: true });
    setTimeout(() => { this.docQuery = null; }, 0);
  }
 
  agregarDocumentoLibre(): void {
    const nombre = this.nuevoDocNombre.trim();
    if (!nombre) return;
    if (this.form.documentos.some(d => d.nombre.toLowerCase() === nombre.toLowerCase())) {
      this.messageService.add({ severity: 'warn', summary: 'Duplicado', detail: 'Ese documento ya fue agregado' });
      return;
    }
    this.form.documentos.push({ nombre, tipo: 'PDF', requerido: true });
    this.nuevoDocNombre = '';
  }
 
  eliminarDocumento(index: number): void {
    this.form.documentos.splice(index, 1);
  }
 
  get docsObligatorios(): number {
    return this.form.documentos.filter(d => d.requerido).length;
  }
 
  get docsOpcionales(): number {
    return this.form.documentos.filter(d => !d.requerido).length;
  }
 
  // ── Guardar ───────────────────────────────────────────────────────
  guardar(): void {
    this.submitted = true;
 
    if (!this.form.nombre.trim()) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El nombre es requerido' });
      return;
    }
 
    const resultado: Subcategoria = {
      id: this.subcategoria?.id ?? Date.now(),
      nombre: this.form.nombre.trim(),
      descripcion: this.form.descripcion.trim(),
      costo: this.form.tieneCosto ? (this.form.costo || 0) : 0,
      requiereDocumentos: this.form.requiereDocumentos,
      areas: this.form.areas.map(a => ({ nombre: a.nombre, sla: a.sla })),
      documentos: this.form.documentos.map(d => ({
        nombre: d.nombre,
        tipo: d.tipo,
        requerido: d.requerido,
      })),
    };
 
    this.guardado.emit(resultado);
    this.messageService.add({
      severity: 'success',
      summary: this.modoEdicion ? 'Actualizado' : 'Creado',
      detail: `Subcategoría "${resultado.nombre}" ${this.modoEdicion ? 'actualizada' : 'creada'} correctamente`,
    });
  }
 
  cancelar(): void {
    this.cancelado.emit();
  }
}
