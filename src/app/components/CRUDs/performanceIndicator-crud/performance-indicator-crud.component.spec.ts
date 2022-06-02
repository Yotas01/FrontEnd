import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceIndicatorCRUDComponent } from './performance-indicator-crud.component';

describe('PerformanceIndicatorCRUDComponent', () => {
  let component: PerformanceIndicatorCRUDComponent;
  let fixture: ComponentFixture<PerformanceIndicatorCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceIndicatorCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceIndicatorCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
