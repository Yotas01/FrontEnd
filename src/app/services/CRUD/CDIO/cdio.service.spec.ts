import { TestBed } from '@angular/core/testing';

import { CDIOService } from './cdio.service';

describe('CDIOService', () => {
  let service: CDIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CDIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
