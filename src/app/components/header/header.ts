import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { InAppBrowser, DefaultSystemBrowserOptions } from '@capacitor/inappbrowser';
import { authUrl, clientId, key, tokenName } from '../../constants';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    RouterLink,
    OverlayModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public userService: UserService) {}

  isOpen = false;

  signIn() {
    const fullUrl = `${authUrl}?X-API-Key=${key}&client_id=${clientId}&response_type=code`

    const cookies = document.cookie;

    console.log("Cookies", JSON.stringify(cookies));

    InAppBrowser.openInSystemBrowser({
      url: fullUrl,
      options: DefaultSystemBrowserOptions
    }).then(() => this.isOpen = false);
  }

  signOut() {
    this.userService.signOut();
    this.isOpen = false;
  }
}
