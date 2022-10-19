import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdioBloomDialogComponent } from './cdio-bloom-dialog.component';

describe('CdioBloomDialogComponent', () => {
  let component: CdioBloomDialogComponent;
  let fixture: ComponentFixture<CdioBloomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdioBloomDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdioBloomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
