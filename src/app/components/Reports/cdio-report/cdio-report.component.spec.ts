import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdioReportComponent } from './cdio-report.component';

describe('CdioReportComponent', () => {
  let component: CdioReportComponent;
  let fixture: ComponentFixture<CdioReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdioReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdioReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
