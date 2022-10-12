import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaeDialogComponent } from './new-rae-dialog.component';

describe('NewRaeDialogComponent', () => {
  let component: NewRaeDialogComponent;
  let fixture: ComponentFixture<NewRaeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRaeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRaeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
