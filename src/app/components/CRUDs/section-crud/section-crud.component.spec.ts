import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCrudComponent } from './section-crud.component';

describe('SectionCrudComponent', () => {
  let component: SectionCrudComponent;
  let fixture: ComponentFixture<SectionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
