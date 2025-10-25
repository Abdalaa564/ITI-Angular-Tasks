import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './components/parent/parent';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day3');
}
