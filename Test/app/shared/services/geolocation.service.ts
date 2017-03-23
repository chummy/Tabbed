import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import * as geolocation from "nativescript-geolocation";
import { Location } from "../models";

@Injectable()
export class GeolocationService {
  getLocation(): Observable<any> {
    let promise: Promise<any> = new Promise(
      (resolve, reject) => {
        if (!geolocation.isEnabled()) {
          geolocation.enableLocationRequest()
            .then(
              () => {
                this._getCurrentLocation().subscribe(
                  (location) => {
                    resolve(location);
                  }
                );
              }
            )
            .catch(
              (error) => {
                reject(error);
              }
            );
        } else {
          this._getCurrentLocation().subscribe(
            (location) => {
              resolve(location);
            }
          );
        }
      }
    );

    return Observable.fromPromise(promise);
  }

  private _getCurrentLocation(): Observable<any> {
    let promise: Promise<any> = new Promise(
      (resolve, reject) => {
        geolocation.getCurrentLocation({ timeout: 20000 })
          .then(
            (location) => {
              let newLocation: Location = {
                latitude: location.latitude,
                longitude: location.longitude
              };

              resolve(newLocation);
            }
          )
          .catch(
            (error) => {
              reject(error);
            }
          );
      }
    );

    return Observable.fromPromise(promise);
  }
}
