import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GrillComponent } from './grill/grill.component';

@NgModule({
  declarations: [HomeComponent, GrillComponent],
  imports: [CommonModule]
})
export class PagesModule {}
