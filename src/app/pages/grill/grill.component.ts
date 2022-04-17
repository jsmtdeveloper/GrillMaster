import { Component, OnInit } from '@angular/core';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { GrillService } from '@app/core/services/utils/grill.service';

/**Grill component definition */
@Component({
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  /**Variable to know if something is loading */
  loading: boolean = true;
  /**Total rounds of the grill*/
  totalRounds: number = 0;
  /**Final result of the grill */
  resultGrill: MenuGrill[] = [];

  showElement: boolean = true;

  /**
   * Constructs the component, and create a subscription with the grillMenuList Observable of GrillService to show o hide the loader
   * @param {GrillService} grillService  Injected services
   */
  constructor(readonly grillService: GrillService) {
    this.grillService.grillMenuList$.subscribe((res) => {
      if (res && res.length > 0) this.loading = false;
    });
  }

  /**
   * its executed after render every element on the component and calls load data method from @grillService
   */
  ngOnInit(): void {
    this.grillService.loadData();
  }

  /**
   * Handle the click event on the 'Let's Go' button
   *
   * Prepare the information, assign the result of the menus and the total Rounds
   */
  onStartToGrill() {
    const currentMenuList = this.grillService.getCurrentMenuList();
    this.resultGrill = this.grillService.startToGrill(currentMenuList);
    this.totalRounds = this.calculateTotalRounds(this.resultGrill);
  }

  /**
   * Calculate the total rounds of the grill process
   * @param {MenuGrill[]} resultGrill  Injected services
   * @returns Total rounds
   */
  private calculateTotalRounds(resultGrill: MenuGrill[]) {
    if (!resultGrill || resultGrill.length === 0) return 0;

    return resultGrill.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.rounds.length;
    }, 0);
  }

  handlerShowDetails(showDetails: boolean) {
    this.showElement = !showDetails;
  }
}
