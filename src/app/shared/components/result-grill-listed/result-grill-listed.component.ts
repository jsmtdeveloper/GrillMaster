import { Component, Input, OnInit } from '@angular/core';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';

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

  menuSelected?: MenuGrill;

  constructor() {}

  handlerClickSeeDetails(menuGrill: MenuGrill) {
    this.menuSelected = menuGrill;
  }
}
