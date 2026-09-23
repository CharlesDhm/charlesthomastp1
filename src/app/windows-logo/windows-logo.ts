import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-windows-logo',
  templateUrl: './windows-logo.html',
  styleUrl: './windows-logo.scss'
})
export class WindowsLogo {
  @Output() colorChange = new EventEmitter<string>();

  public changeColor(color: string) {
    this.colorChange.emit(color);
  }
}