import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { UserCardComponent } from './components/user-card-component/user-card-component';
import { AppComponent } from './components/app-component/app-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserCardComponent, AppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day2Project');
}
