import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    MatInputModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('d2raidguides');
}
