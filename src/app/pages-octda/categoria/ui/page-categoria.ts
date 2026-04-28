import { Component, inject } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { ListarCategoria } from '../domain/entity/categoria.model';
import { ListCategoria } from "./list-categoria/list-categoria";
import { ListSubcategoria } from "./list-subcategoria/list-subcategoria";

import { DetalleSubcategoria } from "./detalle-subcategoria/detalle-subcategoria";
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../domain/signals/categoria.signal';
import { SubCategoriaSignal } from '../domain/signals/subCategoria.signal';
import { ListarSubCategoria } from '../domain/entity/subCategoria.entity';

@Component({
  selector: 'app-page-categoria',
  imports: [DividerModule, CommonModule, ListCategoria, ListSubcategoria, DetalleSubcategoria],
  templateUrl: './page-categoria.html',
  styleUrl: './page-categoria.scss',
})
export class PageCategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectSubCategoria = this.subCategoriaSignal.selectSubCategoria;
  selectSubCategoriaDefault = this.subCategoriaSignal.selectSubCategoriaDefault;


  onCategoriaSeleccionada(categoria: ListarCategoria): void {
    this.selectCategoria.set(categoria);
    this.selectSubCategoria.set(this.selectSubCategoriaDefault);
  }

  onVerSubcategoria(sub: ListarSubCategoria): void {
    this.selectSubCategoria.set(sub);
  }

  onCerrarDetalle(): void {
    this.selectSubCategoria.set(this.selectSubCategoriaDefault);
  }
}
