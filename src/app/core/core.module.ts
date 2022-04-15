import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GrillMenuService } from './services/api/grill-menu.service';
import { BarbecuingService } from './services/utils/barbecuing.service';

const apiServices = [GrillMenuService];
const utilsServices = [BarbecuingService];
@NgModule({
  providers: [...apiServices, ...utilsServices]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
