import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@app/shared/shared.module';

/**Constant with all the module's components */
const COMPONENTS = [HomeComponent];

/**
 * Pages module definition
 */
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {}
