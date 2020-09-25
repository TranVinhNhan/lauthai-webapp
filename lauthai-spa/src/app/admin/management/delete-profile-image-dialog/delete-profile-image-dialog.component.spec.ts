import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfileImageDialogComponent } from './delete-profile-image-dialog.component';

describe('DeleteProfileImageDialogComponent', () => {
  let component: DeleteProfileImageDialogComponent;
  let fixture: ComponentFixture<DeleteProfileImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProfileImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfileImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
