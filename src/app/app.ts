import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RaidEncSearch } from './components/raid-enc-search/raid-enc-search';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    RaidEncSearch,
    MatInputModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('d2raidguides');
}
