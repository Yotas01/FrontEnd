import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyOutcomeDialogComponent } from './modify-outcome-dialog.component';

describe('ModifyOutcomeDialogComponent', () => {
  let component: ModifyOutcomeDialogComponent;
  let fixture: ComponentFixture<ModifyOutcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyOutcomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyOutcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
