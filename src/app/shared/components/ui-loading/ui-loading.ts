import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-loading',
  imports: [],
  templateUrl: './ui-loading.html',
  styleUrl: './ui-loading.scss',
})
export class UiLoading {
  @Input() message: string = 'Cargando...';
 
  readonly dots = Array.from({ length: 21 }, (_, i) =>
    +((Math.floor(i / 7) * 0.09 + (i % 7) * 0.13).toFixed(2))
  );
}
