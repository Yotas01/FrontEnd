import { TestBed } from '@angular/core/testing';

import { PerformanceIndicatorService } from './performance-indicator.service';

describe('PerformanceIndicatorService', () => {
  let service: PerformanceIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
