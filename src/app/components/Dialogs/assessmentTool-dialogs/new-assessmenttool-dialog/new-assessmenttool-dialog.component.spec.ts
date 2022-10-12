import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssessmenttoolDialogComponent } from './new-assessmenttool-dialog.component';

describe('NewAssessmenttoolDialogComponent', () => {
  let component: NewAssessmenttoolDialogComponent;
  let fixture: ComponentFixture<NewAssessmenttoolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssessmenttoolDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAssessmenttoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
