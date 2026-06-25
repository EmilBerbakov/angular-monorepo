import { Component, input } from '@angular/core';
import {MatCardAppearance, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'lib-shared-card-component',
  imports: [MatCardModule],
  templateUrl: './shared-card-component.html',
  styleUrl: './shared-card-component.css',
})
export class SharedCardComponent {

readonly appearance = input<MatCardAppearance>('raised');
readonly title = input('My Title')
readonly subtitle = input('My subtitle')
}
