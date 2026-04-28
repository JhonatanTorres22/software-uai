import { Component, inject, output } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CommonModule } from '@angular/common';
import { SubCategoriaSignal } from '../../domain/signals/subCategoria.signal';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
@Component({
  selector: 'app-detalle-subcategoria',
  imports: [DividerModule, TagModule, ButtonModule, CardModule, CommonModule, UiIconButton, UiButtonComponent],
  templateUrl: './detalle-subcategoria.html',
  styleUrl: './detalle-subcategoria.scss',
})
export class DetalleSubcategoria {
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);
  selectSubCategoria = this.subCategoriaSignal.selectSubCategoria;
  cerrar = output<void>();
}
