import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileComponent } from './components/mobile-component/mobile-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MobileComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('mobile-app');
}
