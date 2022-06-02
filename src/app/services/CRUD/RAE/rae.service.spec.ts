import { TestBed } from '@angular/core/testing';

import { RAEService } from './rae.service';

describe('RAEService', () => {
  let service: RAEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
