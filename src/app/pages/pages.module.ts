import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { GrillComponent } from './grill/grill.component';

@NgModule({
  declarations: [HomeComponent, GrillComponent],
  imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
