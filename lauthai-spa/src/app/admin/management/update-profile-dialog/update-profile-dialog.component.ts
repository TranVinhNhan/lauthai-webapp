import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProfile } from 'src/app/_interfaces/profile.interface';

@Component({
  selector: 'app-update-profile-dialog',
  templateUrl: './update-profile-dialog.component.html',
  styleUrls: ['./update-profile-dialog.component.scss']
})
export class UpdateProfileDialogComponent implements OnInit {

  updateForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfile) { }

  ngOnInit(): void {
    this.initUpdateForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (this.updateForm.valid) {
      this.dialogRef.close(this.updateForm.value);
    } else {
      this.dialogRef.close();
    }
  }

  initUpdateForm(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(this.data.id),
      pfpUrl: new FormControl(this.data.pfpUrl),
      name: new FormControl(this.data.name, Validators.required),
      age: new FormControl(this.data.age, Validators.required),
      university: new FormControl(this.data.university, Validators.required),
      job: new FormControl(this.data.job, Validators.required),
      marriedStatus: new FormControl(this.data.marriedStatus, Validators.required),
      district: new FormControl(this.data.district, Validators.required),
      phone: new FormControl(this.data.phone, Validators.required)
    });
  }
}
