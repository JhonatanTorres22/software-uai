import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ui-icon-button',
  imports: [ButtonModule, TooltipModule, CommonModule],
  templateUrl: './ui-icon-button.html',
  styleUrl: './ui-icon-button.scss'
})
export class UiIconButton {
  @Input() icon!: string;
  @Input() tooltip: string = '';
  @Input() color: ButtonSeverity = 'primary';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<Event>();

  private lastTouchTimestamp = 0;

  handleTouch(event: TouchEvent) {
    if (this.disabled) {
      return;
    }

    this.lastTouchTimestamp = Date.now();
    event.preventDefault();
    this.onClick.emit(event);
  }

  handleClick(event: Event) {
    if (this.disabled) {
      return;
    }

    if (Date.now() - this.lastTouchTimestamp < 450) {
      return;
    }

    this.onClick.emit(event);
  }

}
