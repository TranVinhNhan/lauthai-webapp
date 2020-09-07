import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { DataTableDataSource } from 'src/app/client/data-table/data-table-datasource';
import { Profile } from './../../_interfaces/profile.interface';
import { ProfileService } from '../../_services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfileDialogComponent } from './create-profile-dialog/create-profile-dialog.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'pfpUrl', 'university', 'age', 'job', 'marriedStatus', 'district', 'phone'];
  dataSource: MatTableDataSource<Profile>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: string;

  constructor(
    private profileService: ProfileService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.profileService.getProfiles(20));
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
      width: 'fit-content',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      console.log(this.data);
    });
  }
}
