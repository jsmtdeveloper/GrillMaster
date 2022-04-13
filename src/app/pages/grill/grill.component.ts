import { Component, OnInit } from '@angular/core';
import { Menu } from '@app/core/models/interface/menu.inteface';
import { GrillMenuService } from '@app/core/services/grill-menu.service';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.scss']
})
export class GrillComponent implements OnInit {
  grillMenuList: Subject<Menu[]> = new Subject();
  loading: boolean = false;
  constructor(private readonly _grillMenuService: GrillMenuService) {
    this.grillMenuList.subscribe((res) => {
      if (res?.length > 0) console.log('Begins!');
    });
  }

  ngOnInit(): void {
    this._grillMenuService.getGrillMenu().subscribe((res) => {
      this.grillMenuList.next(res);
    });
  }
}
