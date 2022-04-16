import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '@app/core/models/interface/entities/menu';
import { Observable } from 'rxjs';

/**Menus listed component definition */
@Component({
  selector: 'app-menus-listed',
  templateUrl: './menus-listed.component.html',
  styleUrls: ['./menus-listed.component.scss']
})
export class MenusListedComponent {
  /**Variable to know if something is loading */
  @Input() loading: boolean = true;
  /** Read only variable of our grill's menus as an Observable */
  @Input() grillMenuList: Menu[] | null = null;

  constructor() {}
}
