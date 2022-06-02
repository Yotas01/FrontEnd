import { TestBed } from '@angular/core/testing';

import { CourseReviewService } from './course-review.service';

describe('SearchCourseService', () => {
  let service: CourseReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
