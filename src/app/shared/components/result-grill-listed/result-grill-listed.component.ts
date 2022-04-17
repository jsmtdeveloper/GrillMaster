import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getRandomColor } from '@app/core/library/randomizer';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { ItemColor } from '../../../core/models/types/item-id-color';

/**Result grill listed component definition */
@Component({
  selector: 'app-result-grill-listed',
  templateUrl: './result-grill-listed.component.html',
  styleUrls: ['./result-grill-listed.component.scss']
})
export class ResultGrillListedComponent {
  /**Total rounds of the grill*/
  @Input() totalRounds: number = 0;
  /**Final result of the grill */
  @Input() resultGrill: MenuGrill[] = [];

  @Output() showDetailsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuSelected?: MenuGrill;

  constructor() {}

  handlerClickSeeDetails(menuGrill: MenuGrill) {
    this.menuSelected = menuGrill;
    this.showDetailsEvent.emit(true);
  }

  handlerClickGoBack() {
    this.menuSelected = undefined;
    this.showDetailsEvent.emit(false);
  }
}
