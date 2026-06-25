import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopComponent } from './components/desktop-component/desktop-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('desktop-app');
}
