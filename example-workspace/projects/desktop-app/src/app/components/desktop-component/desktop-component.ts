import { Component, inject } from '@angular/core';
import { SharedCardComponent, SharedService } from 'example-library';
import {MatTableModule} from '@angular/material/table';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-desktop-component',
  imports: [SharedCardComponent, MatTableModule, AsyncPipe],
  templateUrl: './desktop-component.html',
  styleUrl: './desktop-component.scss',
})
export class DesktopComponent {
  sharedService = inject(SharedService);
  constructor() {
    this.sharedService.getUsers();
  }
}
