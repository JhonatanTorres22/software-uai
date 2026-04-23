import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Categoria } from '../../domain/categoria.model';
import { ButtonModule } from "primeng/button";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { ModalService } from '@/shared/services/modal.service';
import { AddEditCategoria } from '../add-edit-categoria/add-edit-categoria';
@Component({
  selector: 'app-list-categoria',
  imports: [ButtonModule, AutoCompleteModule, FormsModule, CommonModule, UiButtonComponent, UiIconButton],
  templateUrl: './list-categoria.html',
  styleUrl: './list-categoria.scss',
})
export class ListCategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectCategoriaDefault = this.categoriaSignal.selectCategoriaDefault;
  categorias: Categoria[] = [];
  sugerencias: Categoria[] = [];
  private readonly modalService = inject(ModalService)


  constructor() { }

  ngOnInit(): void {
    // Datos mock
    this.categorias = [
      {
        id: 1, nombre: 'ACADÉMICO', descripcion: 'Descripcion de categoría académica',
        subcategorias: [
          {
            id: 1, nombre: 'Emisión de Título', descripcion: 'Trámite para emisión y entrega de título profesional', costo: 450,
            requiereDocumentos: true,
            documentos: [
              { nombre: 'Copia DNI', tipo: 'PDF', requerido: true },
              { nombre: 'Constancia Egresado', tipo: 'PDF', requerido: true },
              { nombre: 'Recibo Pago', tipo: 'Image', requerido: true },
              { nombre: 'Certificado Idiomas', tipo: 'Image', requerido: false },
              { nombre: 'Tesis', tipo: 'Image', requerido: false },
            ],
            areas: [
              { nombre: 'Secretaría Académica', sla: 2 },
              { nombre: 'Contabilidad', sla: 1 },
              { nombre: 'Rectorado', sla: 3 },
              { nombre: 'Archivo', sla: 1 },
              { nombre: 'Decanato', sla: 2 },
              { nombre: 'Registro', sla: 2 },
            ],
          },
          {
            id: 2, nombre: 'Certificado de Estudios', descripcion: 'Certificado oficial de estudios cursados', costo: 120,
            requiereDocumentos: false, documentos: [],
            areas: [
              { nombre: 'Secretaría Académica', sla: 1 },
              { nombre: 'Registro', sla: 1 },
            ],
          },
          {
            id: 3, nombre: 'Convalidación de Cursos', descripcion: 'Proceso de reconocimiento de cursos externos', costo: 80,
            requiereDocumentos: true,
            documentos: [
              { nombre: 'Silabo Original', tipo: 'PDF', requerido: true },
              { nombre: 'Certificado Notas', tipo: 'PDF', requerido: true },
            ],
            areas: [
              { nombre: 'Decanato', sla: 3 },
              { nombre: 'Secretaría Académica', sla: 2 },
            ],
          },
          {
            id: 4, nombre: 'Retiro de Asignatura', descripcion: 'Solicitud de retiro de asignatura matriculada', costo: 30,
            requiereDocumentos: false, documentos: [],
            areas: [
              { nombre: 'Secretaría Académica', sla: 1 },
            ],
          },
        ],
      },
      {
        id: 2, nombre: 'ADMINISTRATIVO', descripcion: 'Descripcion de categoría académica',
        subcategorias: [
          {
            id: 5, nombre: 'Constancia de Trabajo', descripcion: 'Documento que acredita relación laboral', costo: 50,
            requiereDocumentos: false, documentos: [],
            areas: [{ nombre: 'Recursos Humanos', sla: 2 }, { nombre: 'Gerencia', sla: 1 }],
          },
        ],
      },
      {
        id: 3, nombre: 'FINANCIERO', descripcion: 'Descripcion de categoría académica',
        subcategorias: [
          {
            id: 6, nombre: 'Devolución de Pagos', descripcion: 'Solicitud de devolución de pagos realizados', costo: 0,
            requiereDocumentos: true,
            documentos: [{ nombre: 'Recibo Original', tipo: 'PDF', requerido: true }],
            areas: [{ nombre: 'Tesorería', sla: 3 }, { nombre: 'Contabilidad', sla: 2 }],
          },
        ],
      },
    ];
  }

  filtrarCategorias(event: { query: string }): void {
    const q = event.query.toLowerCase();
    this.sugerencias = this.categorias.filter(c =>
      c.nombre.toLowerCase().includes(q)
    );
  }

  seleccionar(event: { value: Categoria }): void {
    this.selectCategoria.set(event.value);
  }

  limpiar(): void {
    this.selectCategoria.set(this.selectCategoriaDefault);
  }

  openAddEditCategoria(categoria: Categoria) {
    console.log(categoria);
    
    const ref = this.modalService.open(AddEditCategoria, {
      data: { categoria: categoria },
      header: categoria.id === 0 ? 'Agregar Categoría' : 'Editar Categoría',
      width: 'min(90vw, 720px)',
      maximizable: false,
    });

    ref.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        // aquí podrías refrescar lista si quieres
      }
    });
  }

}
