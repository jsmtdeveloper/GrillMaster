import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { getRandomColor } from '@app/core/library/randomizer';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { ItemColor } from '@app/core/models/types/item-id-color';

@Component({
  selector: 'app-grill-details',
  templateUrl: './grill-details.component.html',
  styleUrls: ['./grill-details.component.scss']
})
export class GrillDetailsComponent implements OnChanges {
  constructor() {}

  @Input() menuSelected?: MenuGrill;
  @Output() goBackEvent: EventEmitter<any> = new EventEmitter();
  currentItemsColors: ItemColor[] = [];

  ngOnChanges(): void {
    if (this.menuSelected) this.setCurrentItemsColors(this.menuSelected);
  }

  handlerClickGoBack() {
    this.currentItemsColors = [];
    this.goBackEvent.emit(null);
  }

  setCurrentItemsColors(menuGrill: MenuGrill) {
    if (!menuGrill) return;

    menuGrill.itemsGrilled.forEach((item) => {
      const colorIndex = this.currentItemsColors.findIndex((itemColor) => itemColor && itemColor.id === item.id);
      if (colorIndex === -1) this.currentItemsColors.push({ id: item.id, name: item.name, color: getRandomColor() });
    });
  }
}
