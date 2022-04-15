import { Injectable } from '@angular/core';
import { Menu } from '@app/core/models/interface/entities/menu.inteface';
import { ItemGrill } from '@app/core/models/interface/grill/item-grill.interface';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GrillMenuService } from '../api/grill-menu.service';
import {
  getCurrentItems,
  getNewBoard,
  placeInBoard
} from './BarbecuingFunctions';

@Injectable({
  providedIn: 'root'
})
export class BarbecuingService {
  private currentMenus: Menu[] = [];
  private _grillMenuList: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>(
    []
  );
  readonly grillMenuList$: Observable<Menu[]> =
    this._grillMenuList.asObservable();

  constructor(private _grillMenuService: GrillMenuService) {}

  loadData() {
    this._grillMenuService.getGrillMenu().subscribe((res) => this.setData(res));
  }

  private setData(res: Menu[]) {
    this._grillMenuList.next(res);
    this.currentMenus = res;
  }

  async startGrill() {
    let menusResult = [];

    for await (const menu of this.currentMenus) {
      menusResult.push(await this.grillMenu(menu));
    }
    // return this.grillMenu(this.currentMenus[0]);
    return menusResult;
  }

  async grillMenu(menu: Menu): Promise<MenuGrill> {
    let menuOnGrill: MenuGrill = {
      menuId: menu.$id,
      name: menu.menu,
      rounds: []
    };
    const noItems = !menu || menu?.items.length === 0;
    if (noItems) return menuOnGrill;

    const currentItems: ItemGrill[] = getCurrentItems(menu);
    do {
      const currentBoard = getNewBoard();

      await placeInBoard(
        currentItems.filter((w) => !w.grilled),
        currentBoard.boardSpace
      );

      menuOnGrill.rounds.push(currentBoard);
    } while (currentItems.filter((w) => !w.grilled).length != 0);
    return menuOnGrill;
  }
}
