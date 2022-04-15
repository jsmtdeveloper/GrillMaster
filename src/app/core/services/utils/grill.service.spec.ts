import { TestBed } from '@angular/core/testing';

import { GrillService } from './grill.service';

describe('GrillService', () => {
  let service: GrillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
