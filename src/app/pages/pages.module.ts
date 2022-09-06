import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoordenadasService } from '@app/core/services/utils/coordenadas.service';

/**Constant with all the module's components */
const COMPONENTS = [HomeComponent];

/**
 * Pages module definition
 */
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  providers: [CoordenadasService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {}
