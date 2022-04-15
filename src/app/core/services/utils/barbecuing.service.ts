import { Injectable } from '@angular/core';
import { mapMenuToMenuGrill } from '@app/core/mappers/MenuToMenuGrill';
import { Menu } from '@app/core/models/interface/entities/menu';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GrillMenuService } from '../api/grill-menu.service';
import {
  getCurrentItems,
  getNewGrill,
  placeOnGrill
} from './BarbecuingFunctions';

@Injectable({
  providedIn: 'root'
})
export class BarbecuingService {
  private _grillMenuList: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>(
    []
  );
  readonly grillMenuList$: Observable<Menu[]> =
    this._grillMenuList.asObservable();

  constructor(private _grillMenuService: GrillMenuService) {}

  loadData() {
    this._grillMenuService.getGrillMenu().subscribe((res) => this.setData(res));
  }

  startToGrill() {
    let menusResult = [];
    for (const currentMenu of this.getCurrentMenuList()) {
      menusResult.push(this.grillMenu(currentMenu));
    }
    return menusResult;
  }

  grillMenu(menu: Menu): MenuGrill {
    const noItems = !menu || menu?.items.length === 0;
    if (noItems) return {} as MenuGrill;

    const menuOnGrill: MenuGrill = mapMenuToMenuGrill(menu);
    const currentItems: ItemGrill[] = getCurrentItems(menu);
    const existItemsToGrill = () => {
      return currentItems.filter((w) => !w.grilled).length != 0;
    };

    do {
      const currentGrill = getNewGrill();

      placeOnGrill(
        currentItems.filter((w) => !w.grilled),
        currentGrill.grillSpace
      );
      menuOnGrill.rounds.push(currentGrill);
    } while (existItemsToGrill());

    return menuOnGrill;
  }

  private setData(res: Menu[]) {
    this._grillMenuList.next(res);
  }

  private getCurrentMenuList() {
    return this._grillMenuList?.value || [];
  }
}
