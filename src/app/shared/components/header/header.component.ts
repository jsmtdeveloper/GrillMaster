import { Component } from '@angular/core';
import { CoordenadasService } from '@app/core/services/utils/coordenadas.service';

/**
 * App header definition
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public coordenadasService: CoordenadasService) {}
  /**Title of the application */
  title = 'Grill Master - Jeison stiven';
}
