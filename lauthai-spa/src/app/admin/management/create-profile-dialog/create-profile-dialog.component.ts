import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProfile } from './../../../_models/_interfaces/profile.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-create-profile-dialog',
  templateUrl: './create-profile-dialog.component.html',
  styleUrls: ['./create-profile-dialog.component.scss']
})
export class CreateProfileDialogComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfile
  ) { }

  ngOnInit(): void {
    this.initCreateForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (this.createForm.valid) {
      this.dialogRef.close(this.createForm.value);
    } else {
      this.dialogRef.close();
    }
  }

  initCreateForm(): void {
    this.createForm = new FormGroup({
      id: new FormControl(''),
      pfpUrl: new FormControl(''),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      university: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      marriedStatus: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

}
