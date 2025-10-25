import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { About } from './components/about/about';
import { Services } from './components/services/services';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Nav, About, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day1Project');
}
