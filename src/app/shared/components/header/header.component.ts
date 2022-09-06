import { Component } from '@angular/core';

/**
 * App header definition
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**Title of the application */
  title = 'Grill Master - Jeison stiven';
  public latitude: number = 39.5065;
  public longitude: number = -0.41009;
}
