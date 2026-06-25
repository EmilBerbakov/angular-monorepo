import { Component } from '@angular/core';
import { SharedCardComponent } from 'example-library';

@Component({
  selector: 'app-desktop-component',
  imports: [SharedCardComponent],
  templateUrl: './desktop-component.html',
  styleUrl: './desktop-component.scss',
})
export class DesktopComponent {}
