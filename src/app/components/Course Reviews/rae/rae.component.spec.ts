import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaeComponent } from './rae.component';

describe('RaeComponent', () => {
  let component: RaeComponent;
  let fixture: ComponentFixture<RaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
