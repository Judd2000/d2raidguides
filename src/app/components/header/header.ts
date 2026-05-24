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
    this.userService.signIn().then(() => this.isOpen = false);
  }

  signOut() {
    this.userService.signOut();
    this.isOpen = false;
  }
}
