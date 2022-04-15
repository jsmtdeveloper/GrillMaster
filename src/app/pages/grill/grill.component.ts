import { Component, OnInit } from '@angular/core';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { GrillService } from '@app/core/services/utils/grill.service';

@Component({
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  loading: boolean = true;
  totalRounds: number = 0;
  resultGrill: MenuGrill[] = [];

  constructor(readonly barbecuingService: GrillService) {
    this.barbecuingService.grillMenuList$.subscribe((res) => {
      if (res && res.length > 0) this.loading = false;
    });
  }

  ngOnInit(): void {
    this.barbecuingService.loadData();
  }

  onStartToGrill() {
    this.resultGrill = this.barbecuingService.startToGrill();
    this.totalRounds = this.resultGrill.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue.rounds.length;
      },
      0
    );
  }
}
