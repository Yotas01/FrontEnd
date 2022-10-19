import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRaeDialogComponent } from './modify-rae-dialog.component';

describe('ModifyRaeDialogComponent', () => {
  let component: ModifyRaeDialogComponent;
  let fixture: ComponentFixture<ModifyRaeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRaeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyRaeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
