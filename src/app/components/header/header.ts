import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { Browser } from '@capacitor/browser';

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
  isOpen = false;

  signIn() {
    const key = 'cd08aa0e1a724e5fb795e39303c9367a';

    const clientId = 52217;

    const authUrl = 'https://www.bungie.net/en/OAuth/Authorize';

    const fullUrl = `${authUrl}?X-API-Key=${key}&client_id=${clientId}&response_type=code`

    Browser.open({
      url: fullUrl,
      windowName: '_blank'
    });
  }
}
