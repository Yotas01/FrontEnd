import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCdioToCourseDialogComponent } from './add-cdio-to-course-dialog.component';

describe('AddCdioToCourseDialogComponent', () => {
  let component: AddCdioToCourseDialogComponent;
  let fixture: ComponentFixture<AddCdioToCourseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCdioToCourseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCdioToCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
