import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileDialogComponent } from './create-profile-dialog.component';
import { AdminRoutingModule } from './../../admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateProfileDialogComponent', () => {
  let component: CreateProfileDialogComponent;
  let fixture: ComponentFixture<CreateProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProfileDialogComponent],
      imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.createForm.controls.name.setValue('');
    component.createForm.controls.pfpUrl.setValue('');
    component.createForm.controls.age.setValue('');
    component.createForm.controls.university.setValue('');
    component.createForm.controls.job.setValue('');
    component.createForm.controls.marriedStatus.setValue('');
    component.createForm.controls.district.setValue('');
    component.createForm.controls.phone.setValue('');
    expect(component.createForm.valid).toBeFalsy();
  }));
});
