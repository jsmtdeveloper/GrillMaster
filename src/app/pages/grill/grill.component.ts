import { Component, OnInit } from '@angular/core';
import { MenuGrill } from '@app/core/models/interface/grill/menu-grill.interface';
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

  startGrill() {
    this.loading = true;
    this.barbecuingService.startGrill().then((res) => {
      this.loading = false;
      this.resultGrill = res;
    });
  }
}
