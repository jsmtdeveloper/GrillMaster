import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { getRandomColor } from '@app/core/library/randomizer';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { ItemColor } from '@app/core/models/types/item-id-color';

/**Definition of the Grill Detail Component*/
@Component({
  selector: 'app-grill-details',
  templateUrl: './grill-details.component.html',
  styleUrls: ['./grill-details.component.scss']
})
export class GrillDetailsComponent implements OnChanges {
  /**Input variable to get the menuSelected from the parent */
  @Input() menuSelected?: MenuGrill;
  /**Output event to comunicate with the parent */
  @Output() goBackEvent: EventEmitter<any> = new EventEmitter();
  /**Current list of colors by itemId */
  currentItemsColors: ItemColor[] = [];

  /**It's executed everytime than the paren change de value of the input values
   *
   *If the menuSeleted get changed, call setCurrentItemsColor method
   */
  ngOnChanges(): void {
    if (this.menuSelected) this.setCurrentItemsColors(this.menuSelected);
  }

  /**handle the 'Go back' click button. Clean the currentItemColors an emit to parent */
  handlerClickGoBack() {
    this.currentItemsColors = [];
    this.goBackEvent.emit(null);
  }

  /**
   * Set the current list of colors dependent of the current items grilled on the current menuGrilled
   * @param {MenuGrill}menuGrill
   */
  setCurrentItemsColors(menuGrill: MenuGrill) {
    if (!menuGrill) return;

    menuGrill.itemsGrilled.forEach((item) => {
      const colorIndex = this.currentItemsColors.findIndex((itemColor) => itemColor && itemColor.id === item.id);
      if (colorIndex === -1) this.currentItemsColors.push({ id: item.id, name: item.name, color: getRandomColor() });
    });
  }
}
