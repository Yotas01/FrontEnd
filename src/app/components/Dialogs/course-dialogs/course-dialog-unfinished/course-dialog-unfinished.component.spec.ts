import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogUnfinishedComponent } from './course-dialog-unfinished.component';

describe('CourseDialogUnfinishedComponent', () => {
  let component: CourseDialogUnfinishedComponent;
  let fixture: ComponentFixture<CourseDialogUnfinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDialogUnfinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDialogUnfinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
