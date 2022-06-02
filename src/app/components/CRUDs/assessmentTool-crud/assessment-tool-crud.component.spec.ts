import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentToolCRUDComponent } from './assessment-tool-crud.component';

describe('AssessmentToolCRUDComponent', () => {
  let component: AssessmentToolCRUDComponent;
  let fixture: ComponentFixture<AssessmentToolCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentToolCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentToolCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
