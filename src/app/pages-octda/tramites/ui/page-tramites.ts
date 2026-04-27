import { Component } from '@angular/core';
import { ListTramites } from './list-tramites/list-tramites';
import { CommonModule } from '@angular/common';
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-page-tramites',
  imports: [ListTramites, CommonModule, DividerModule],
  templateUrl: './page-tramites.html',
  styleUrl: './page-tramites.scss',
})
export class PageTramites {

}
