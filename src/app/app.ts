import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatInputModule } from '@angular/material/input';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { serverUrl, tokenName } from './constants';
import { CapacitorHttp } from '@capacitor/core';
import { UserService } from './services/user.service';
import { InAppBrowser } from '@capacitor/inappbrowser';

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

  constructor(private userService: UserService) { }

  protected readonly title = signal('d2raidguides');

  ngOnInit(): void {
    // Fix this to check token TTL
    const token = localStorage.getItem(tokenName);
    if (token) {
      console.log("Token", JSON.stringify(token), JSON.parse(token)["membership_id"]);
      this.userService.getProfileImg(JSON.parse(token) ?? {});
    }
    
    InAppBrowser.addListener('browserPageLoaded', () => {
      if (this.userService.signingOut()) {
        this.userService.clearUser();
      }
    })

    App.addListener('appUrlOpen', (event) => {
      const url = new URL(event.url);

      if (url.host === 'callback' || url.pathname.includes('callback')) {
        Browser.close();
        
        const authCode = url.searchParams.get('code');
        const tokenUrl = `${serverUrl}/gettokens?auth_code=${authCode}`;

        const options = {
          url: tokenUrl,
        };

        // save access and refresh token happens automatically with CapacitorHttp.
        CapacitorHttp.get(options).then((r) => {
          if (r?.data) {
            this.userService.setToken(tokenName, r.data);
            this.userService.getProfileImg(r.data);
          }
        });
      }
    })
  }
}
