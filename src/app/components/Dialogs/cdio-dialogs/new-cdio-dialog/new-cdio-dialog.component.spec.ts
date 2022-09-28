import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCdioDialogComponent } from './new-cdio-dialog.component';

describe('NewCdioDialogComponent', () => {
  let component: NewCdioDialogComponent;
  let fixture: ComponentFixture<NewCdioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCdioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCdioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
