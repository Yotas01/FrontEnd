import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentToolComponent } from './assessment-tool.component';

describe('AssessmentToolComponent', () => {
  let component: AssessmentToolComponent;
  let fixture: ComponentFixture<AssessmentToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
