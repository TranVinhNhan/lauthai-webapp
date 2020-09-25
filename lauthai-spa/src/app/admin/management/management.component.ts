import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

import { IProfile } from './../../_models/interfaces/profile.interface';
import { Const } from './../../_models/consts/const';
import { ProfileService } from '../../_services/profile.service';
import { CreateProfileDialogComponent } from './create-profile-dialog/create-profile-dialog.component';
import { UpdateProfileDialogComponent } from './update-profile-dialog/update-profile-dialog.component';
import { DeleteProfileDialogComponent } from './delete-profile-dialog/delete-profile-dialog.component';
import { ExtensionService } from 'src/app/_services/extension.service';
import { DeleteProfileImageDialogComponent } from './delete-profile-image-dialog/delete-profile-image-dialog.component';
import { UploadProfileImageDialogComponent } from './upload-profile-image-dialog/upload-profile-image-dialog.component';

@Component({

  selector: 'app-admin-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})

export class ManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = Const.TABLE_ADMIN_COLUMN;
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];
  formData: FormData = new FormData();
  overSizeFileName: string[] = [];
  previewImageUrls: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private profileService: ProfileService,
    private extension: ExtensionService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((response: IProfile[]) => {
      this.profiles = response;
      this.dataSource = new MatTableDataSource(this.profiles);
      this.loadPaginator();
    }, error => console.log(error));
  }

  loadPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteProfileDialogComponent, {
      width: 'fit-content',
      data: id
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.profileService.deleteProfile(result).subscribe(() => {
          this.profiles.splice(this.profiles.indexOf(this.profiles.find(p => p.id === result)), 1);
          this.dataSource = new MatTableDataSource(this.profiles);
          this.loadPaginator();
        }, error => { });
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateProfileDialogComponent, {
      width: 'fit-content',
      height: 'fit-content'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.profileService.addProfile(result).subscribe((response: IProfile) => {
          this.profiles.push(response);
          this.dataSource = new MatTableDataSource(this.profiles);
          this.loadPaginator();
          this.extension.openSnackBar('Tạo profile thành công', 'Bỏ qua');
        }, error => { });
      }
    });
  }

  openUpdateDialog(pf: IProfile): void {
    const dialogRef = this.dialog.open(UpdateProfileDialogComponent, {
      width: 'fit-content',
      data: pf
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.profileService.updateProfile(pf.id, result).subscribe(() => {
          this.loadProfiles();
          this.loadPaginator();
        });
      }
    });
  }

  openUploadProfileImageDialog(profileId: number): void{
    const dialogRef = this.dialog.open(UploadProfileImageDialogComponent, {
      width: 'fit-content',
      data: new FormData()
    });

    dialogRef.afterClosed().subscribe((result: FormData) => {
      if (result.getAll('uploadFiles').length > 0) {
        this.uploadToServer(profileId, result);
      }
    });
  }

  openDeleteProfileImageDialog(profileId: number, imgId: number): void {
    const dialogRef = this.dialog.open(DeleteProfileImageDialogComponent, {
      width: 'fit-content',
      data: imgId
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        this.profileService.deleteProfilePic(profileId, imgId)
        .subscribe(() => {
          this.extension.openSnackBar('Đã xóa', 'Bỏ qua');
          this.loadProfiles();
          this.loadPaginator();
        });
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getMainPfpUrl(profile: IProfile): string {
    return this.extension.getMainPfpUrl(profile);
  }

  uploadToServer(profileId: number, formData: FormData): void {
    this.profileService.uploadProfilePics(profileId, formData)
      .subscribe(() => {
        this.loadProfiles();
        this.loadPaginator();
        this.formData.delete('uploadFiles');
        this.previewImageUrls = [];
      }, error => console.log(error));
  }
}
