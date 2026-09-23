import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { WindowsLogo } from './windows-logo/windows-logo';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, WindowsLogo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  bgClass: string = 'bgblanc'; 
}