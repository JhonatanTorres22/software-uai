import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListUsuario } from './list-usuario/list-usuario';
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-usuario-page',
  imports: [CommonModule, DividerModule, ListUsuario],
  templateUrl: './usuario-page.html',
  styleUrl: './usuario-page.scss',
})
export class UsuarioPage {

}
