import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/**Constant with all the module's components */
const COMPONENTS = [HeaderComponent, FooterComponent];

/**Shared module definition */
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
