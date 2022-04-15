import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GrillMenuApiService } from './services/api/grill-menu-api.service';
import { GrillService } from './services/utils/grill.service';

/**Constant with the services for API requests */
const apiServices = [GrillMenuApiService];

/**Constant with the Angular services */
const utilsServices = [GrillService];

/**Core Module definition */
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
