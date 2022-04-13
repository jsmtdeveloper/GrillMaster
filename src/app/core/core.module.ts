import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GrillMenuService } from './services/grill-menu.service';

@NgModule({
  providers: [GrillMenuService]
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
