import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReviewCommentComponent } from './section-review-comment.component';

describe('SectionReviewCommentComponent', () => {
  let component: SectionReviewCommentComponent;
  let fixture: ComponentFixture<SectionReviewCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionReviewCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionReviewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
