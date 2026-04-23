import { Component, inject } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { Categoria, Subcategoria } from '../domain/categoria.model';
import { ListCategoria } from "./list-categoria/list-categoria";
import { ListSubcategoria } from "./list-subcategoria/list-subcategoria";

import { DetalleSubcategoria } from "./detalle-subcategoria/detalle-subcategoria";
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../domain/signals/categoria.signal';

@Component({
  selector: 'app-page-categoria',
  imports: [DividerModule, CommonModule, ListCategoria, ListSubcategoria, DetalleSubcategoria],
  templateUrl: './page-categoria.html',
  styleUrl: './page-categoria.scss',
})
export class PageCategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectSubCategoria = this.categoriaSignal.selectSubCategoria;
  selectSubCategoriaDefault = this.categoriaSignal.selectSubCategoriaDefault;


  onCategoriaSeleccionada(categoria: Categoria): void {
    this.selectCategoria.set(categoria);
    this.selectSubCategoria.set(this.selectSubCategoriaDefault);
  }

  onVerSubcategoria(sub: Subcategoria): void {
    this.selectSubCategoria.set(sub);
  }

  onCerrarDetalle(): void {
    this.selectSubCategoria.set(this.selectSubCategoriaDefault);
  }
}
