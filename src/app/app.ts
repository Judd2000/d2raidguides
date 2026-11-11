import { Component, NgZone, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatInputModule } from '@angular/material/input';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { UserService } from './services/user.service';
import { InAppBrowser } from '@capacitor/inappbrowser';
import { DataService } from './services/data.service';

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

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private zone: NgZone
  ) { }

  protected readonly title = signal('d2raidguides');

  ngOnInit(): void {
    this.userService.handleTokenStatus(false, () => {
      this.userService.getProfileImg();
    });

    
    InAppBrowser.addListener('browserPageLoaded', () => {
      this.zone.run(() => {
        if (this.userService.signingOut()) {
          this.userService.clearUser();
        }
      });
      
    });

    App.addListener('appUrlOpen', (event) => {
      this.zone.run(() => {
        const url = new URL(event.url);

        if (url.host === 'callback' || url.pathname.includes('callback')) {
          Browser.close();
          
          const authCode = url.searchParams.get('code') ?? '';
          this.userService.getAuthTokens({ authCode })
        }
      });

    });
  }
}
