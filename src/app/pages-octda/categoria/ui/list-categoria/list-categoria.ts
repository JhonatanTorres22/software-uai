import { Component, inject, output } from '@angular/core';

import { ButtonModule } from "primeng/button";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { ModalService } from '@/shared/services/modal.service';
import { AddEditCategoria } from '../add-edit-categoria/add-edit-categoria';
import { EliminarCategoria, ListarCategoria } from '../../domain/entity/categoria.model';
import { NotificationService } from '@/shared/services/notification.service';
import { ObtenerCategoriaUseCase } from '../../application/use-cases/categorias/obtenerCategoria.use-case';
import { EliminarCategoriaUseCase } from '../../application/use-cases/categorias/eliminarCategoria.use-case';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { SubCategoriaSignal } from '../../domain/signals/subCategoria.signal';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
@Component({
  selector: 'app-list-categoria',
  imports: [ButtonModule, AutoCompleteModule, FormsModule, CommonModule, UiButtonComponent, UiIconButton, UiLoading],
  templateUrl: './list-categoria.html',
  styleUrl: './list-categoria.scss',
})
export class ListCategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);

  categoriaSeleccionada: ListarCategoria | null = null;
  terminoCategoria = '';

  categoriaSeleccionadaChange = output<ListarCategoria>();

  selectCategoria = this.categoriaSignal.selectCategoria;
  selectCategoriaDefault = this.categoriaSignal.selectCategoriaDefault;
  listCategoria = this.categoriaSignal.listCategoria;
  loading = this.categoriaSignal.loading;
  sugerencias: ListarCategoria[] = [];
  private readonly modalService = inject(ModalService);

  private readonly notificationService = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly obtenerCategoriaUseCase = inject(ObtenerCategoriaUseCase);
  private readonly eliminarCategoriaUseCase = inject(EliminarCategoriaUseCase);


  constructor() { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.loading.set(true);
    this.obtenerCategoriaUseCase.execute().subscribe({
      next: (data) => {
        this.listCategoria.set(data.data);

        const categoriaActual = this.selectCategoria();
        const categoriaExiste = data.data.some((item) => item.idCategoriaTramite === categoriaActual.idCategoriaTramite);
        this.loading.set(false);
        if (!categoriaExiste) {
          this.resetCategoriaSeleccionada();
        } else if (categoriaActual.idCategoriaTramite > 0) {
          const actualizada = data.data.find((item) => item.idCategoriaTramite === categoriaActual.idCategoriaTramite) ?? categoriaActual;
          this.setCategoriaSeleccionada(actualizada);
        }
      },
      error: () => {
        this.notificationService.error('No se pudieron cargar las categorías');
        this.loading.set(false);
      }
    });
  }

  filtrarCategorias(event: { query: string }): void {
    this.terminoCategoria = event.query ?? '';
    const q = this.terminoCategoria.trim().toLowerCase();

    this.sugerencias = this.listCategoria().filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      c.descripcion.toLowerCase().includes(q)
    );
  }

  seleccionar(event: { value: ListarCategoria }): void {
    this.setCategoriaSeleccionada(event.value);
  }

  onModelChange(value: ListarCategoria | string | null): void {
    if (typeof value === 'string') {
      this.terminoCategoria = value;

      if (this.categoriaSeleccionada && value !== this.categoriaSeleccionada.nombre) {
        this.clearCategoriaSeleccionadaState();
      }

      return;
    }

    if (!value) {
      this.resetCategoriaSeleccionada();
    }
  }

  limpiarCategoria(): void {
    this.resetCategoriaSeleccionada();
  }

  completarConDropdown(): void {
    this.sugerencias = [...this.listCategoria()];
  }

  openCrearCategoria(): void {
    this.openAddEditCategoria(this.selectCategoriaDefault, this.resolveCreatePrefillNombre());
  }

  openAddEditCategoria(categoria: ListarCategoria, prefillNombre = ''): void {
    const ref = this.modalService.open(AddEditCategoria, {
      data: {
        categoria,
        prefillNombre
      },
      header: categoria.idCategoriaTramite === 0 ? 'Agregar Categoría' : 'Editar Categoría',
      width: 'min(90vw, 720px)',
      maximizable: false,
    });

    ref.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        this.obtenerCategorias();
      }
    });
  }

  eliminarCategoria(categoria: ListarCategoria): void {
    this.confirmDialogService.open({
      type: 'question',
      title: 'Eliminar categoría',
      message: `Se eliminará la categoría "${categoria.nombre}" y su información relacionada. Esta acción no se puede deshacer.`,
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      onAccept: () => {
        this.loading.set(true);

        const payload: EliminarCategoria = {
          idCategoriaTramite: categoria.idCategoriaTramite
        };

        this.eliminarCategoriaUseCase.execute(payload).subscribe({
          next: (response) => {
            this.loading.set(false);

            if (this.selectCategoria().idCategoriaTramite === categoria.idCategoriaTramite) {
              this.resetCategoriaSeleccionada();
            }

            this.notificationService.success(`${response.message}, categoría eliminada correctamente`);
            this.obtenerCategorias();
          },
          error: () => {
            this.loading.set(false);
            this.notificationService.error('No se pudo eliminar la categoría');
          }
        });
      },
      onReject: () => {
        this.loading.set(false);
      },
    });
  }

  private setCategoriaSeleccionada(categoria: ListarCategoria): void {
    this.categoriaSeleccionada = categoria;
    this.selectCategoria.set(categoria);
    this.terminoCategoria = categoria.nombre;
    this.categoriaSeleccionadaChange.emit(categoria);
  }

  private resetCategoriaSeleccionada(): void {
    this.clearCategoriaSeleccionadaState();
    this.terminoCategoria = '';
    this.sugerencias = [...this.listCategoria()];
  }

  private clearCategoriaSeleccionadaState(): void {
    this.categoriaSeleccionada = null;
    this.selectCategoria.set(this.selectCategoriaDefault);
    this.subCategoriaSignal.listSubCategoria.set([]);
    this.subCategoriaSignal.selectSubCategoria.set(this.subCategoriaSignal.selectSubCategoriaDefault);
    this.categoriaSeleccionadaChange.emit(this.selectCategoriaDefault);
  }

  private resolveCreatePrefillNombre(): string {
    const term = this.terminoCategoria.trim();
    if (!term) {
      return '';
    }

    const exists = this.listCategoria().some((categoria) =>
      categoria.nombre.trim().toLowerCase() === term.toLowerCase()
    );

    return exists ? '' : term;
  }
}
