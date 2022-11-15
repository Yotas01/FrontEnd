import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPerformanceIndicatorDialogComponent } from './modify-performance-indicator-dialog.component';

describe('ModifyPerformanceIndicatorDialogComponent', () => {
  let component: ModifyPerformanceIndicatorDialogComponent;
  let fixture: ComponentFixture<ModifyPerformanceIndicatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPerformanceIndicatorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPerformanceIndicatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
