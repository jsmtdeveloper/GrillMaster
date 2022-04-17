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
  /**Event to connect with the parent component */
  @Output() showDetailsEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**Current menu selected */
  menuSelected?: MenuGrill;

  /**
   * handle the 'see details' button, assign the current menu and emits event to parent
   * @param {MenuGrill} menuGrill the current menu we want to see on detail
   */
  handlerClickSeeDetails(menuGrill: MenuGrill) {
    this.menuSelected = menuGrill;
    this.showDetailsEvent.emit(true);
  }

  /**
   * handle the 'Go back' button, clean the current menu and emits event to parent
   */
  handlerClickGoBack() {
    this.menuSelected = undefined;
    this.showDetailsEvent.emit(false);
  }
}
