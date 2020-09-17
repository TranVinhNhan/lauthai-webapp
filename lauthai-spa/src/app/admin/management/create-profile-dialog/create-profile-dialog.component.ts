import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProfile } from './../../../_models/interfaces/profile.interface';
import { UniversitySerivce } from 'src/app/_services/university.service';
import { IUniversity } from 'src/app/_models/interfaces/university.interface';

@Component({
  selector: 'app-admin-create-profile-dialog',
  templateUrl: './create-profile-dialog.component.html',
  styleUrls: ['./create-profile-dialog.component.scss']
})
export class CreateProfileDialogComponent implements OnInit {

  createForm: FormGroup;
  universities: IUniversity[];
  isFetching = false;

  constructor(
    private univesityService: UniversitySerivce,
    public dialogRef: MatDialogRef<CreateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfile
  ) { }

  ngOnInit(): void {
    this.initCreateForm();
    this.loadUniversities();
  }

  loadUniversities(): void {
    this.isFetching = true;
    this.univesityService.getUniversities().subscribe((response: IUniversity[]) => {
      this.universities = response;
      this.isFetching = false;
    }, error => { });
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
      pfpUrl: new FormControl(''),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      universityId: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      marriedStatus: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

}
