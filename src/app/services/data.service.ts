import { Injectable } from "@angular/core";
import { serverUrl } from "../constants";
import { CapacitorHttp } from "@capacitor/core";

@Injectable({
  providedIn: 'root',
})
export class DataService {
    // Here, we will fetch Destiny 2 Weapon, Armor Sets, Exotic Armor and Ability information and save them into local storage.

    // This will be done by the server and returned in a friendly, consumable way.
    populateManifest() {
      const url = `${serverUrl}/getdata/manifestdata`;

      CapacitorHttp.get({ url }).then((r) => {
        // TODO: ADD ERROR TOASTS
        if (r?.status === 200 && r?.data) {
          // add to local storage.
          localStorage.setItem('manifestData', JSON.stringify(r.data));
        } else {
          // TODO: Better error handling in-app (toasts?)
          console.error('Request failed.', r?.status, r?.data);
        }
      });
    }

    getManifest() {
      const manifest = localStorage.getItem('manifestData');
      console.log('Manifest set to local storage', manifest);
      if (manifest) return JSON.parse(manifest);
    }
}