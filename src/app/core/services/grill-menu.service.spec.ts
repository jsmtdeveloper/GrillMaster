import { TestBed } from '@angular/core/testing';

import { GrillMenuService } from './grill-menu.service';

describe('GrillMenuService', () => {
  let service: GrillMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrillMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
