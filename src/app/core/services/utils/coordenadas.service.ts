import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService {
  public latitude: number = 39.5065;
  public longitude: number = -0.41009;
  public show: boolean = false;
  public get currentPlace(): string {
    console.log(`latitude:'${this.latitude.toString()}'; longitude:'${this.longitude.toString()}'`);
    return `latitude:'${this.latitude.toString()}'; longitude:'${this.longitude.toString()}'`;
  }

  onToggleShow() {
    if (this.show) {
      var element = document.getElementsByTagName('video'),
        index;
      if (element != null) {
        for (index = element.length - 1; index >= 0; index--) {
          element[index].parentNode?.removeChild(element[index]);
        }
      }
    }

    this.show = !this.show;
  }
}
