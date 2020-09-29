import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfileImageDialogComponent } from './upload-profile-image-dialog.component';

describe('UploadProfileImageDialogComponent', () => {
  let component: UploadProfileImageDialogComponent;
  let fixture: ComponentFixture<UploadProfileImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProfileImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProfileImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
