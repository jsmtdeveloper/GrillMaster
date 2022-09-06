import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService {
  public latitude: number = 39.5065;
  public longitude: number = -0.41009;

  public get currentPlace(): string {
    console.log(`latitude:'${this.latitude.toString()}'; longitude:'${this.longitude.toString()}'`);
    return `latitude:'${this.latitude.toString()}'; longitude:'${this.longitude.toString()}'`;
  }
}
