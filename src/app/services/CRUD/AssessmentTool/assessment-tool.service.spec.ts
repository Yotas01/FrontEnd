import { TestBed } from '@angular/core/testing';

import { AssessmentToolService } from './assessment-tool.service';

describe('AssessmentToolService', () => {
  let service: AssessmentToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
