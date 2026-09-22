import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  imports: [NgClass],
  selector: 'app-exemple',
  styleUrl: './exemple.scss',
  templateUrl: './exemple.html',
})
export class Exemple implements OnInit {
  @Input() color: string = "";
  @Output() text: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.text.emit("je suis l'output d'exemple")
  }
}