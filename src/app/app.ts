import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatInputModule } from '@angular/material/input';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { serverUrl } from './constants';
import { CapacitorHttp } from '@capacitor/core';

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

        
        const tokenUrl = `${serverUrl}/gettokens?auth_code=${authCode}`;

        const options = {
          url: tokenUrl,
        };

        // save access and refresh token happens automatically with CapacitorHttp.
        CapacitorHttp.get(options).then((r) => {
          console.log("weewoo weewoo response", JSON.stringify(r?.data));


          // your application should save the access_token and refresh_token.
          // we need these strings until the next refresh.

          // your application should calculate and save the time then the access_token will expire.
          // expires_in says how many seconds until that happens, so add those seconds to the current datetime.

          // so if expires_in says 3600 seconds, then if you need to make another request more than 1 hour from right now, you should refresh the token instead of trying to use it.

          // your application should calculate and save the time then the refresh_token will expire.
          // refresh_expires_in says how many seconds until that happens, so add those seconds to the current datetime.

          // so if refresh_expires_in says 7776000 seconds, then if you need to refresh the token more than 90 days from right now, the user will probably need to log in again.
        });
      }
    })
  }

}
