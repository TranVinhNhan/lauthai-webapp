import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICategory } from 'src/app/_models/interfaces/category.interface';
import { IUniversity } from 'src/app/_models/interfaces/university.interface';
import { CategoryService } from 'src/app/_services/category.service';
import { UniversitySerivce } from 'src/app/_services/university.service';
import { IProfile } from './../../../_models/interfaces/profile.interface';

@Component({
  selector: 'app-admin-update-profile-dialog',
  templateUrl: './update-profile-dialog.component.html',
  styleUrls: ['./update-profile-dialog.component.scss']
})
export class UpdateProfileDialogComponent implements OnInit {

  updateForm: FormGroup;
  universities: IUniversity[];
  categories: ICategory[];
  isFetching = false;

  constructor(
    private universitiesService: UniversitySerivce,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<UpdateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProfile) { }

  ngOnInit(): void {
    this.loadUniversities();
    this.initUpdateForm();
    this.loadCategories();
  }

  loadUniversities(): void {
    this.isFetching = true;
    this.universitiesService.getUniversities().subscribe((response: IUniversity[]) => {
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
    if (this.updateForm.valid) {
      this.dialogRef.close(this.updateForm.value);
    } else {
      this.dialogRef.close();
    }
  }

  initUpdateForm(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, Validators.required),
      age: new FormControl(this.data.age, Validators.required),
      universityId: new FormControl(this.data.university.id, Validators.required),
      categoryId: new FormControl(this.data.category.id, Validators.required),
      job: new FormControl(this.data.job, Validators.required),
      marriedStatus: new FormControl(this.data.marriedStatus, Validators.required),
      district: new FormControl(this.data.district, Validators.required),
      phone: new FormControl(this.data.phone, Validators.required),
      price: new FormControl(this.data.price, Validators.required)
    });
  }
}
