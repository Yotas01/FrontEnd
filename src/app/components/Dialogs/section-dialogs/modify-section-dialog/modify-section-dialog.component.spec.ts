import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySectionDialogComponent } from './modify-section-dialog.component';

describe('ModifySectionDialogComponent', () => {
  let component: ModifySectionDialogComponent;
  let fixture: ComponentFixture<ModifySectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifySectionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
