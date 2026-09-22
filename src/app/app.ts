import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemple } from './exemple/exemple';
@Component({
  imports: [
    RouterOutlet, Exemple
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
public colorRed: string ='red';
public textOutput:string ="";
public exempleOutput(exempleText: string){
    this.textOutput = exempleText; 
}}
