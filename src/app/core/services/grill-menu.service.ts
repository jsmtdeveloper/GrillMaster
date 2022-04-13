import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { mapMenuFromApiToMenu } from '../mappers/menu-from-api-to-menu';
import { MenuFromApi } from '../models/interface/api/menu-from-api';
import { Menu } from '../models/interface/menu.inteface';

@Injectable({
  providedIn: 'root'
})
export class GrillMenuService {
  readonly baseUrlApi = 'https://isol-grillassessment.azurewebsites.net/api';

  constructor(private readonly _httpClient: HttpClient) {}

  getGrillMenu(): Observable<Menu[]> {
    return this._httpClient
      .get<MenuFromApi[]>(`${this.baseUrlApi}/GrillMenu`)
      .pipe(map((res) => res.map(mapMenuFromApiToMenu)));
  }
}
