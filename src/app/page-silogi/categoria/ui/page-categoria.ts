import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { ListCategoria } from "./list-categoria/list-categoria";

@Component({
  selector: 'app-page-categoria',
  imports: [DividerModule, ListCategoria],
  templateUrl: './page-categoria.html',
  styleUrl: './page-categoria.scss',
})
export class PageCategoria {

}
