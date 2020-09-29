import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-profile-image-dialog',
  templateUrl: './delete-profile-image-dialog.component.html',
  styleUrls: ['./delete-profile-image-dialog.component.scss']
})
export class DeleteProfileImageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteProfileImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
