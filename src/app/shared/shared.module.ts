import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CoordenadasService } from '@app/core/services/utils/coordenadas.service';

/**Constant with all the module's components */
const COMPONENTS = [HeaderComponent, FooterComponent];

/**Shared module definition */
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  providers: [CoordenadasService],
  exports: [...COMPONENTS, FormsModule]
})
export class SharedModule {}
