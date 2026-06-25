import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedCardComponent, SharedService } from 'example-library';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-mobile-component',
  imports: [SharedCardComponent, AsyncPipe, MatExpansionModule],
  templateUrl: './mobile-component.html',
  styleUrl: './mobile-component.scss',
})
export class MobileComponent {
  sharedService = inject(SharedService);
  constructor() {
    this.sharedService.getUsers();
  }
}
