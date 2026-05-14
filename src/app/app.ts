import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatInputModule } from '@angular/material/input';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';

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
export class AppComponent implements OnInit {

  protected readonly title = signal('d2raidguides');

  ngOnInit(): void {
    App.addListener('appUrlOpen', (event) => {
      const url = new URL(event.url);

      if (url.host === 'callback' || url.pathname.includes('callback')) {
        Browser.close();

        const authCode = url.searchParams.get('code');

        // TODO: 

        // 3. Send them to your Angular Authentication service to log in
        // then route the user inside the app:
        // this.router.navigate(['/dashboard']);
      }
    })
  }

}
