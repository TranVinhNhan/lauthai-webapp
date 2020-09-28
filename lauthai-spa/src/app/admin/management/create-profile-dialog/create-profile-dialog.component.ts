import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { IProfile } from './../../../_models/interfaces/profile.interface';
import { UniversitySerivce } from 'src/app/_services/university.service';
import { IUniversity } from 'src/app/_models/interfaces/university.interface';
import { ProfileService } from 'src/app/_services/profile.service';
import { ExtensionService } from 'src/app/_services/extension.service';
import { ICategory } from 'src/app/_models/interfaces/category.interface';
import { CategoryService } from 'src/app/_services/category.service';
import { elementAt } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin-create-profile-dialog',
  templateUrl: './create-profile-dialog.component.html',
  styleUrls: ['./create-profile-dialog.component.scss']
})
export class CreateProfileDialogComponent implements OnInit {

  createForm: FormGroup;
  universities: IUniversity[];
  categories: ICategory[];
  isFetching = false;

  constructor(
    private univesityService: UniversitySerivce,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfile
  ) { }

  ngOnInit(): void {
    this.initCreateForm();
    this.loadUniversities();
    this.loadCategories();
  }

  loadUniversities(): void {
    this.isFetching = true;
    this.univesityService.getUniversities().subscribe((response: IUniversity[]) => {
      this.universities = response;
      this.isFetching = false;
    }, error => { });
  }

  loadCategories(): void {
    this.isFetching = true;
    this.categoryService.getCategories().subscribe((response: ICategory[]) => {
      this.categories = response;
      this.isFetching = false;
    }, error => { });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (this.createForm.valid) {
      this.dialogRef.close(this.createForm.value);
      console.log(this.createForm.value);
    } else {
      this.dialogRef.close();
    }
  }

  initCreateForm(): void {
    this.createForm = new FormGroup({
      pfpUrl: new FormControl(''),
      name: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      age: new FormControl('', [Validators.required,Validators.min(18),Validators.max(150)]),
      universityId: new FormControl('', Validators.required),
      categoriesId: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      marriedStatus: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      phone: new FormControl('',[ Validators.required,Validators.maxLength(10),Validators.minLength(8)]),
      price: new FormControl('', [Validators.required,Validators.min(300000)])
    });
  }

}
