import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeCRUDComponent } from './outcome-crud.component';

describe('OutcomeCRUDComponent', () => {
  let component: OutcomeCRUDComponent;
  let fixture: ComponentFixture<OutcomeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
