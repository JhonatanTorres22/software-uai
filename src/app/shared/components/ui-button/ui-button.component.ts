import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss'
})
export class UiButtonComponent implements OnInit {

  @Input() color: ButtonSeverity = 'primary';
  @Input() label: string = '';
  @Input() idButton: string = '';
  @Input() disabled: boolean = false;
  @Input() icon!: string;
  @Input() tooltip!: string;
  @Input() classButton: string = '';
  @Input() borde: string = 'none';
  @Input() type: 'sweet' | 'default' = 'default';

  @Output() onClick = new EventEmitter<Event>();

  computedClass = '';
  private lastTouchTimestamp = 0;

  ngOnInit(): void {
    this.computeClasses();
  }

  private computeClasses() {
    const classes: string[] = [];

    if (this.classButton) {
      classes.push(this.classButton);
    }

    if (this.type !== 'default') {
      classes.push(
        `bg-${this.color}-100`,
        `text-${this.color}-700`,
        this.borde !== 'none' ? `border-round-${this.borde}` : ''
      );
    }

    else if (this.color !== 'secondary') {
      classes.push(
        `bg-${this.color}-500`,
        'text-white'
      );
    }
    this.computedClass = classes.join(' ');
  }

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
