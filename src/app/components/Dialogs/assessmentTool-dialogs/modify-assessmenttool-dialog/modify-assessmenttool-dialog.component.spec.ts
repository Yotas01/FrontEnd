import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssessmenttoolDialogComponent } from './modify-assessmenttool-dialog.component';

describe('ModifyAssessmenttoolDialogComponent', () => {
  let component: ModifyAssessmenttoolDialogComponent;
  let fixture: ComponentFixture<ModifyAssessmenttoolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAssessmenttoolDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAssessmenttoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
