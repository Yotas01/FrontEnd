import { TestBed } from '@angular/core/testing';

import { CourseHasCDIOService } from './course-has-cdio.service';

describe('CourseHasCDIOService', () => {
  let service: CourseHasCDIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseHasCDIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
