import { Component, effect, signal } from '@angular/core';
import { MatFormField, MatInput, MatPrefix } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raid-enc-search',
  imports: [
    MatInput,
    MatIconModule,
    MatPrefix,
    MatFormField,
    FormsModule
  ],
  templateUrl: './raid-enc-search.html',
  styleUrl: './raid-enc-search.css',
})
export class RaidEncSearch {
  search = signal<string>('');

  constructor() {
    effect(() => {
      // dependent code will be triggered on change
      console.log(`Search ${this.search}`);
    })
  }
}
