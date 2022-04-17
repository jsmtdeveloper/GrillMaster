import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenusListedComponent } from './components/menus-listed/menus-listed.component';
import { ResultGrillListedComponent } from './components/result-grill-listed/result-grill-listed.component';
import { StyleItemPreviewPipe } from './pipes/style-item-preview.pipe';
import { GrillDetailsComponent } from './components/result-grill-listed/grill-details/grill-details.component';

/**Constant with all the module's components */
const COMPONENTS = [HeaderComponent, FooterComponent, MenusListedComponent, ResultGrillListedComponent];

/**Shared module definition */
@NgModule({
  declarations: [...COMPONENTS, MenusListedComponent, ResultGrillListedComponent, StyleItemPreviewPipe, GrillDetailsComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
