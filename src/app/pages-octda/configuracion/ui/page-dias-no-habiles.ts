import { Component } from '@angular/core';
import { DividerModule } from "primeng/divider";
import { ListDiasNoHabiles } from "./list-dias-no-habiles/list-dias-no-habiles";

@Component({
  selector: 'app-page-dias-no-habiles',
  imports: [DividerModule, ListDiasNoHabiles],
  templateUrl: './page-dias-no-habiles.html',
  styleUrl: './page-dias-no-habiles.scss',
})
export class PageDiasNoHabiles {

}
