import { TestBed } from '@angular/core/testing';

import { BarbecuingService } from './barbecuing.service';

describe('BarbecuingService', () => {
  let service: BarbecuingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarbecuingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
