import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-profile-dialog',
  templateUrl: './create-profile-dialog.component.html',
  styleUrls: ['./create-profile-dialog.component.scss']
})
export class CreateProfileDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
