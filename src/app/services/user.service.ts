import { Injectable, signal } from '@angular/core';
import { key, profileUrl } from '../constants';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileImg = signal<string>('');

  setProfileImg(url: string) {
    this.profileImg.set(url);
  }

  setToken(name: string, data: any) {
    localStorage.setItem(
      name,
      JSON.stringify({
        ...data,
        refreshExpire: Date.now() + (data.refresh_expires_in * 1000),
        accessExpire: Date.now() + (data.access_expires_in * 10000)
      })
    );
  }

  getProfileImg(data: any) {
    const membershipId = data.membership_id;
          const profileEndpoint = `${profileUrl}${membershipId}`;

    // Get profile image for user
    CapacitorHttp.get({
      url: profileEndpoint,
      headers: {
        "X-API-Key": key,
        "Authorization": `Bearer ${data.access_token}`
      },
    }).then((userDataResponse) => {
      const userImg = `https://bungie.net${userDataResponse.data.Response.profilePicturePath}`;
      console.log("The profile picture is", userImg);
      this.setProfileImg(userImg);
    });
  }
}
