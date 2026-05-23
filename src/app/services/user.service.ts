import { Injectable, signal } from '@angular/core';
import { key, profileUrl, tokenName } from '../constants';
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

  signOut() {
    this.signingOut.set(true);
    InAppBrowser.openInSystemBrowser({
      url: 'https://www.bungie.net/en/User/SignOut',
      options: DefaultSystemBrowserOptions
    }); // find a way to recognize when this goes back to the bungie homepage.
  }  //Sorry its late so i have to head off GN! night!

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

      if (tokenObj["accessExpire"]) {
        // is expired?

        // 1. Yes: Check refresh token
        // - is expired? Open sign-in
        // - isn't expired? Refresh access token

        // 2. No: Proceed
      }
    }
  }

  // checkToken.
  // 1. Is access token valid? Proceed.
  // 2. Is refresh token valid? Request new access token
  // 3. Neither? Open sign in window

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
