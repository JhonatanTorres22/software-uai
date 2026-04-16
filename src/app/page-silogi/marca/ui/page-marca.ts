import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { ListMarca } from "./list-marca/list-marca";

@Component({
  selector: 'app-page-marca',
  imports: [DividerModule, ListMarca],
  templateUrl: './page-marca.html',
  styleUrl: './page-marca.scss',
})
export class PageMarca {

}
