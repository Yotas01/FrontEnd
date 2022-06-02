import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdioCRUDComponent } from './cdio-crud.component';

describe('CdioCRUDComponent', () => {
  let component: CdioCRUDComponent;
  let fixture: ComponentFixture<CdioCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdioCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdioCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
