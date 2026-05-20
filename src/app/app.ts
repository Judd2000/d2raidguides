import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatInputModule } from '@angular/material/input';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { serverUrl } from './constants';
import { CapacitorHttp } from '@capacitor/core';
import { UserService } from './services/user.service';

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

  cookieName = "D2RG_COOKIE";

  getCookieByName(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts?.length === 2) return parts.pop()?.split(';').shift();
    return "";
  };

  ngOnInit(): void {
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
          console.log("weewoo weewoo response", JSON.stringify(r?.data));
          if (r?.data) {
            this.userService.setToken("D2RG_TOKEN", r.data);
            this.userService.getProfileImg(r.data);
          }
        });
      }
    })
  }
}
