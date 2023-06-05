import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() backgroundColor = '#5F2EEA'; // default (primary)
  @Input() color = '#FFF'; // default
  @Input() text!: string;
  @Input() width?: string;

  @Output() clicked = new EventEmitter<boolean>();

  onClick() {
    this.clicked.emit(true);
  }
}
