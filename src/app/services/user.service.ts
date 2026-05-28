import { Injectable, signal } from '@angular/core';
import { authUrl, clientId, key, profileUrl, serverUrl, signOutUrl, tokenName } from '../constants';
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

  handleTokenStatus(promptSignIn: boolean, callback?: () => void) {
    const token = localStorage.getItem(tokenName);
    if (token) {
      const tokenObj = JSON.parse(token);

      const accessExpire = tokenObj["accessExpire"];

      if (!accessExpire || accessExpire < Date.now()) {
        // access token missing or expired.
        const refreshExpire = tokenObj["refreshExpire"];

        if (!refreshExpire || refreshExpire < Date.now()) {
          // refresh token missing or expired.
          if (promptSignIn) this.signIn();
        } else {
          const refreshToken = tokenObj["refresh_token"];
          this.getAuthTokens({ refreshToken }, callback);
        }
      } else {
        // access token not expired.
        callback?.();
      }
    } else {
      if (promptSignIn) this.signIn();
    }
  }

  getAuthTokens(options: { authCode?: string, refreshToken?: string }, callback?: () => void) {
    const url = `${serverUrl}/gettokens`;

    const payload: Record<string, string> = {};
    if (options.authCode) {
      payload['auth_code'] = options.authCode;
    } else if (options.refreshToken) {
      // Refresh token 
      payload['refresh_token'] = options.refreshToken;
    }

    CapacitorHttp.post({ 
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
     }).then((r) => {
      if (r?.status === 200 && r?.data) {
        this.setToken(tokenName, r.data);
        this.getProfileImg();
        callback?.();
      } else {
        // TODO: Better error handling in-app (toasts?)
        console.error('Request failed.', r?.status, r?.data);
      }
    });
  }

  getProfileImg() {
    const token = localStorage.getItem(tokenName);
    if (token) {
      const data = JSON.parse(token) ?? {}

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
        this.setProfileImg(userImg);
        this.signedIn.set(true);
      });
    }
  }
}
