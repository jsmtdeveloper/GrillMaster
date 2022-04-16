import { Injectable } from '@angular/core';
import { getNewGrill, grillIsEmpty } from '@app/core/library/grill-provider';
import { getCurrentItems } from '@app/core/library/items-provider';
import { placeOnGrill } from '@app/core/library/push-on-grill';
import { mapMenuToMenuGrill } from '@app/core/mappers/menu-to-menu-grill';
import { Menu } from '@app/core/models/interface/entities/menu';
import { Grill } from '@app/core/models/interface/grill/grill';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { BehaviorSubject, Observable } from 'rxjs';

import { GrillMenuApiService } from '../api/grill-menu-api.service';

/** Service for manage all the menus and items of the grill*/
@Injectable({
  providedIn: 'root'
})
export class GrillService {
  /** Private variable where we save our grill's menus from the api */
  private _grillMenuList: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
  /** Read only variable of our grill's menus as an Observable */
  readonly grillMenuList$: Observable<Menu[]> = this._grillMenuList.asObservable();

  /**
   * Constructor of the service, inject all the services we need
   * @param {GrillMenuApiService} _grillMenuApiService An instance of GrillMenuApiService to connect with the API
   */
  constructor(private readonly _grillMenuApiService: GrillMenuApiService) {}

  /** Try to get the grill's menus and then call setData method*/
  loadData() {
    this._grillMenuApiService.getGrillMenu().subscribe((response) => this.setData(response));
  }

  /**
   * Strat the grill process
   * @param {Menu[]} currentMenuList A list of the current menus we want to grill
   * @returns An array of the grilled menus
   */
  startToGrill(currentMenuList: Menu[]): MenuGrill[] {
    if (!currentMenuList || currentMenuList.length === 0) return [];

    let menusResult = [];
    for (const currentMenu of currentMenuList) {
      menusResult.push(this.grillSingleMenu(currentMenu));
    }
    return menusResult;
  }

  /**
   * Grill a unique menu
   * @param {Menu} menu Menu to grill
   * @returns A grilled menu if was posible to, or and empty one if wasnt
   */
  grillSingleMenu(menu: Menu): MenuGrill {
    const noItems = !menu || menu?.items.length === 0;
    if (noItems) return {} as MenuGrill;

    const menuOnGrill: MenuGrill = mapMenuToMenuGrill(menu);
    const currentItems: ItemGrill[] = getCurrentItems(menu);
    const existItemsToGrill = () => currentItems.filter((item) => !item.grilled).length != 0;
    const itemsToGrill = () => currentItems.filter((item) => !item.grilled);

    do {
      const currentGrill: Grill = getNewGrill();
      placeOnGrill(itemsToGrill(), currentGrill.grillSpace);

      if (this.isEmptyAfterTryToGrill(currentGrill, itemsToGrill())) break;

      menuOnGrill.rounds.push(currentGrill);
    } while (existItemsToGrill());

    menuOnGrill.itemsGrilled = currentItems.filter((item) => item.grilled && item.canBeGrill);
    menuOnGrill.itemsNoGrilled = currentItems.filter((item) => !item.grilled && !item.canBeGrill);
    return menuOnGrill;
  }

  /**
   * Checks if the grill is empty after an atempt to grill the items with a new grill, if its empty, mark the items as cant be grilled
   * @param {Grill} currentGrill current grill we are using
   * @param {ItemGrill[]} currentItems all the items we have to grill
   * @returns if the grill is empty or not
   */
  private isEmptyAfterTryToGrill(currentGrill: Grill, currentItems: ItemGrill[]) {
    const isEmpty = grillIsEmpty(currentGrill);
    if (isEmpty) currentItems.forEach((item) => (item.canBeGrill = false));
    return isEmpty;
  }

  /**
   * Assign the param value to grillMenuList
   * @param {Menu[]} menuList Menu to grill
   */
  private setData(menuList: Menu[]) {
    this._grillMenuList.next(menuList);
  }

  /**
   * Get the current value of grillMenuList
   * @returns Current value of grillMenuList or an a empty array
   */
  getCurrentMenuList(): Menu[] {
    return this._grillMenuList?.value || [];
  }
}
