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

@Component({

  selector: 'app-admin-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})

export class ManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = Const.TABLE_ADMIN_COLUMN;
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) { }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteProfileDialogComponent, {
      width: 'fit-content',
      data: id
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      this.profiles.splice(this.profiles.indexOf(this.profiles.find(p => p.id === result)), 1);
      this.dataSource = new MatTableDataSource(this.profiles);
      this.loadPaginator();
    });
  }

  ngOnInit(): void {

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

  ngAfterViewInit(): void {
    this.loadProfiles();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateProfileDialogComponent, {
      width: 'fit-content'
    });

    dialogRef.afterClosed().subscribe((result: IProfile) => {

      if (result) {
        result.id = this.profiles.length + 1;
        this.profiles.push(result);
        this.dataSource = new MatTableDataSource(this.profiles);
        this.loadPaginator();
      }
    });
  }

  openUpdateDialog(pf: IProfile): void {
    const dialogRef = this.dialog.open(UpdateProfileDialogComponent, {
      width: 'fit-content',
      data: pf
    });

    dialogRef.afterClosed().subscribe((result: IProfile) => {
      if (result) {
        const index = this.profiles.indexOf(this.profiles.find(p => p.id === result.id), 0);
        if (index > -1) {
          this.profiles[index] = result;
          this.dataSource = new MatTableDataSource(this.profiles);
          this.loadPaginator();
        }
      }
    });
  }
}
