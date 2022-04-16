import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GrillComponent } from './grill/grill.component';
import { SharedModule } from '@app/shared/shared.module';

/**Constant with all the module's components */
const COMPONENTS = [HomeComponent, GrillComponent];

/**
 * Pages module definition
 */
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule]
})
export class PagesModule {}
