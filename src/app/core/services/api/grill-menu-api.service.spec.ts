import { TestBed } from '@angular/core/testing';

import { GrillMenuApiService } from './grill-menu-api.service';

describe('GrillMenuApiService', () => {
  let service: GrillMenuApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrillMenuApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
