import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { ListUnidadDeMedida } from "./list-unidad-de-medida/list-unidad-de-medida";

@Component({
  selector: 'app-page-unidad-de-medida',
  imports: [DividerModule, ListUnidadDeMedida],
  templateUrl: './page-unidad-de-medida.html',
  styleUrl: './page-unidad-de-medida.scss',
})
export class PageUnidadDeMedida {

}
