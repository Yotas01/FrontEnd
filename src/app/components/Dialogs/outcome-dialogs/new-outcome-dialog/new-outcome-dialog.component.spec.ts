import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutcomeDialogComponent } from './new-outcome-dialog.component';

describe('NewOutcomeDialogComponent', () => {
  let component: NewOutcomeDialogComponent;
  let fixture: ComponentFixture<NewOutcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOutcomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOutcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
