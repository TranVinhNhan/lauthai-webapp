import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { DataTableDataSource } from 'src/app/client/data-table/data-table-datasource';
import { IProfile } from './../../_interfaces/profile.interface';
import { ProfileService } from '../../_services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfileDialogComponent } from './create-profile-dialog/create-profile-dialog.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'pfpUrl', 'university', 'age', 'job', 'marriedStatus', 'district', 'phone', 'action'];
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles(20);
    this.dataSource = new MatTableDataSource(this.profiles);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      console.log(result);
      if (result) {
        result.id = this.profiles.length + 1;
        this.profiles.push(result);
        this.dataSource = new MatTableDataSource(this.profiles);
      }
    });
  }
}
