import { Component } from '@angular/core';
import { CoordenadasService } from '@app/core/services/utils/coordenadas.service';

/**
 * Home component definition
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public coordenadasService: CoordenadasService) {}
}
