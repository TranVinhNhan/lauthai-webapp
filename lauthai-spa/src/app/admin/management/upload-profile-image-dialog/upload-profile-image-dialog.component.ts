import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExtensionService } from 'src/app/_services/extension.service';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-upload-profile-image-dialog',
  templateUrl: './upload-profile-image-dialog.component.html',
  styleUrls: ['./upload-profile-image-dialog.component.scss']
})
export class UploadProfileImageDialogComponent implements OnInit {

  overSizeFileName: string[] = [];
  previewImageUrls: string[] = [];

  constructor(private profileService: ProfileService, private extension: ExtensionService,
              public dialogRef: MatDialogRef<UploadProfileImageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FormData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(this.data);
  }

  onFileInput(event): void {
    const files: File[] = event.target.files;
    if (files.length > 0) {
      for (const file of files) {
        if (file.size > 5242880) {
          this.overSizeFileName.push(file.name);
        } else {
          this.data.append('uploadFiles', file, file.name);
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            this.previewImageUrls.push(e.target.result.toString());
          };
          reader.readAsDataURL(file);
        }
      }
      if (this.overSizeFileName.length > 0) {
        this.extension.openSnackBar(`File ${this.overSizeFileName.toString()} lớn hơn 5MB`, 'Bỏ qua', 5000);
        this.overSizeFileName = [];
      }
    }
  }

  uploadToServer(id: number): void {
    this.profileService.uploadProfilePics(id, this.data)
      .subscribe((response: any) => {
        console.log(response);
        this.data.delete('uploadFiles');
        this.previewImageUrls = [];
      }, error => console.log(error));
  }
}
