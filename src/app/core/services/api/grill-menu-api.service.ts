import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mapMenuFromApiToMenu } from '@app/core/mappers/menu-from-api-to-menu';
import { MenuFromApi } from '@app/core/models/interface/api/menu-from-api';
import { Menu } from '@app/core/models/interface/entities/menu';
import { Observable, map } from 'rxjs';

/**
 * Service to get the Grill menu's and items from the API
 */
@Injectable({
  providedIn: 'root'
})
export class GrillMenuApiService {
  /** Constant with the url base of the API */
  private readonly baseUrlApi = 'https://isol-grillassessment.azurewebsites.net/api';

  /**
   * Constructor of the service, inject all the services we need
   * @param {HttpClient} _httpClient An instance of HttpClient for the requests
   */
  constructor(private readonly _httpClient: HttpClient) {}

  /**
   * Get all the grill's menus from api and map them to Menu
   * @returns An Observable with an arrays of instance of Menu
   */
  getGrillMenu(): Observable<Menu[]> {
    return this._httpClient.get<MenuFromApi[]>(`${this.baseUrlApi}/GrillMenu`).pipe(map((res) => res.map(mapMenuFromApiToMenu)));
  }
}
