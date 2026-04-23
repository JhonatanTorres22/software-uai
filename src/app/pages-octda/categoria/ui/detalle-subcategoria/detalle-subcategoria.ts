import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { Subcategoria } from '../../domain/categoria.model';
import { DividerModule } from "primeng/divider";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-detalle-subcategoria',
  imports: [DividerModule, TagModule, ButtonModule, CardModule, CommonModule, UiIconButton, UiButtonComponent, TimelineModule],
  templateUrl: './detalle-subcategoria.html',
  styleUrl: './detalle-subcategoria.scss',
})
export class DetalleSubcategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  selectSubCategoria = this.categoriaSignal.selectSubCategoria
  cerrar = output<void>();
 
  private readonly areaColors = [
    '#4F81BD', '#70AD47', '#FFC000', '#ED7D31', '#5B9BD5', '#A9D18E',
  ];
 
  private readonly areaIcons = [
    'pi pi-graduation-cap',
    'pi pi-calculator',
    'pi pi-building',
    'pi pi-folder',
    'pi pi-shield',
    'pi pi-id-card',
  ];
 
  getAreaColor(index: number): string {
    return this.areaColors[index % this.areaColors.length];
  }
 
  getAreaIcon(index: number): string {
    return this.areaIcons[index % this.areaIcons.length];
  }
 
}
