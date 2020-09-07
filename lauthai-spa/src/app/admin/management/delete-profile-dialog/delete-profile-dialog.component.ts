import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProfile } from 'src/app/_interfaces/profile.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) { }
    

  ngOnInit(): void {
  }
 onNoClick(){this.dialogRef.close()};
 onOkClick()
 {
   this.dialogRef.close(this.data);
 }
}
