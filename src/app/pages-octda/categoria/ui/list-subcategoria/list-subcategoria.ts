import { Component, inject, output } from '@angular/core';
import { Subcategoria } from '../../domain/categoria.model';
import { CardModule } from "primeng/card";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { ModalService } from '@/shared/services/modal.service';
import { AddEditSubcategoria } from '../add-edit-subcategoria/add-edit-subcategoria';
@Component({
  selector: 'app-list-subcategoria',
  imports: [CardModule, BadgeModule, ButtonModule, DataViewModule, CommonModule, UiButtonComponent, UiIconButton],
  templateUrl: './list-subcategoria.html',
  styleUrl: './list-subcategoria.scss',
})
export class ListSubcategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectSubCategoriaDefault = this.categoriaSignal.selectSubCategoriaDefault;
  subcategoriaVer = output<Subcategoria>()
  private readonly modalService = inject(ModalService)
 
  subcategoriaActivaId: number | null = null;
  mostrarDialog = false;
  modoEdicion = false;
  form: Partial<Subcategoria & { nombre: string; descripcion: string; costo: number }> = {};
  subEditando: Subcategoria | null = null;
 
  constructor() {}

  ver(sub: Subcategoria): void {
    this.subcategoriaActivaId = sub.id;
    this.subcategoriaVer.emit(sub);
  }

    openAddEditSubcategoria(subcategoria: Subcategoria) {
      console.log(subcategoria);
      
      const ref = this.modalService.open(AddEditSubcategoria, {
        data: { subcategoria: subcategoria },
        header: subcategoria.id === 0 ? 'Agregar Subcategoría' : 'Editar Subcategoría',
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
