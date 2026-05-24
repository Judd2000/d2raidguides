import { Injectable, signal } from '@angular/core';
import { authUrl, clientId, key, profileUrl, signOutUrl, tokenName } from '../constants';
import { CapacitorHttp } from '@capacitor/core';
import { InAppBrowser, DefaultSystemBrowserOptions } from '@capacitor/inappbrowser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileImg = signal<string>('');

  signedIn = signal<boolean>(false);

  signingOut = signal<boolean>(false);

  setProfileImg(url: string) {
    this.profileImg.set(url);
  }

  setToken(name: string, data: any) {
    localStorage.setItem(
      name,
      JSON.stringify({
        ...data,
        refreshExpire: Date.now() + (data.refresh_expires_in * 1000),
        accessExpire: Date.now() + (data.expires_in * 10000)
      })
    );
  }

  clearToken(name: string) {
    localStorage.removeItem(name);
  }

  signIn() {
    const fullUrl = `${authUrl}?X-API-Key=${key}&client_id=${clientId}&response_type=code`

    return InAppBrowser.openInSystemBrowser({
      url: fullUrl,
      options: DefaultSystemBrowserOptions
    });
  }

  signOut() {
    this.signingOut.set(true);
    InAppBrowser.openInSystemBrowser({
      url: signOutUrl,
      options: DefaultSystemBrowserOptions
    });
  }

  clearUser() {
    InAppBrowser.close();
    this.clearToken(tokenName);
    this.profileImg.set('');
    this.signedIn.set(false);
    this.signingOut.set(false);
  }

  handleTokenStatus() {
    const token = localStorage.getItem(tokenName);
    if (token) {
      const tokenObj = JSON.parse(token);

      const accessExpire = tokenObj["accessExpire"];

      if (!accessExpire || accessExpire < Date.now()) {
        // is expired?

        console.log('Access token expires at', accessExpire, typeof accessExpire);

        const refreshExpire = tokenObj["refreshExpire"];
        if (!refreshExpire || refreshExpire < Date.now()) {
          // Open sign-in
          this.signIn();
        } else {
          // refresh access token.
        }
      }
    }
  }

  getProfileImg(data: any) {
    const membershipId = data.membership_id ?? data["membership_id"];
    const profileEndpoint = `${profileUrl}${membershipId}`;

    // Get profile image for user
    CapacitorHttp.get({
      url: profileEndpoint,
      headers: {
        "X-API-Key": key,
        "Authorization": `Bearer ${data.access_token ?? data["access_token"]}`
      },
    }).then((userDataResponse) => {
      const userImg = `https://bungie.net${userDataResponse.data.Response.profilePicturePath}`;
      console.log("The profile picture is", userImg);
      this.setProfileImg(userImg);
      this.signedIn.set(true);
    });
  }
}
