import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogLeftComponent } from './course-dialog-left.component';

describe('CourseDialogLeftComponent', () => {
  let component: CourseDialogLeftComponent;
  let fixture: ComponentFixture<CourseDialogLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDialogLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDialogLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
