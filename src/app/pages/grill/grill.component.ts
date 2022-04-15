import { Component, OnInit } from '@angular/core';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill';
import { BarbecuingService } from '@app/core/services/utils/barbecuing.service';

@Component({
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  loading: boolean = true;
  resultGrill: MenuGrill[] = [];

  constructor(readonly barbecuingService: BarbecuingService) {
    this.barbecuingService.grillMenuList$.subscribe((res) => {
      if (res && res.length > 0) this.loading = false;
    });
  }

  ngOnInit(): void {
    this.barbecuingService.loadData();
  }

  onStartToGrill() {
    this.resultGrill = this.barbecuingService.startToGrill();
  }
}
