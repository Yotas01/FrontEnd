import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCdioDialogComponent } from './modify-cdio-dialog.component';

describe('ModifyCdioDialogComponent', () => {
  let component: ModifyCdioDialogComponent;
  let fixture: ComponentFixture<ModifyCdioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCdioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCdioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
