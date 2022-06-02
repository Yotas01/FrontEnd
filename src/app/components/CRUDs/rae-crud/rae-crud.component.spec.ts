import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaeCRUDComponent } from './rae-crud.component';

describe('RaeCRUDComponent', () => {
  let component: RaeCRUDComponent;
  let fixture: ComponentFixture<RaeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaeCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
