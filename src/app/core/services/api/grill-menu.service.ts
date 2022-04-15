import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapMenuFromApiToMenu } from '@app/core/mappers/menu-from-api-to-menu';
import { MenuFromApi } from '@app/core/models/interface/api/menu-from-api.interface';
import { Menu } from '@app/core/models/interface/entities/menu.inteface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrillMenuService {
  private readonly baseUrlApi =
    'https://isol-grillassessment.azurewebsites.net/api';

  constructor(private readonly _httpClient: HttpClient) {}

  getGrillMenu(): Observable<Menu[]> {
    return this._httpClient
      .get<MenuFromApi[]>(`${this.baseUrlApi}/GrillMenu`)
      .pipe(map((res) => res.map(mapMenuFromApiToMenu)));
  }
}
