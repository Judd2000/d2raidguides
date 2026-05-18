import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { InAppBrowser, DefaultSystemBrowserOptions } from '@capacitor/inappbrowser';
import { authUrl, clientId, key } from '../../constants';

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
    const fullUrl = `${authUrl}?X-API-Key=${key}&client_id=${clientId}&response_type=code`

    InAppBrowser.openInSystemBrowser({
      url: fullUrl,
      options: DefaultSystemBrowserOptions
    });
  }
}
