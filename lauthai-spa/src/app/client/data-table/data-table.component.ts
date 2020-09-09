import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { Const } from './../../_models/consts/const';

@Component({
  selector: 'app-client-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = Const.TABLE_USER_COLUMN;
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];

  constructor(private profileService: ProfileService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles(20);
    this.dataSource = new MatTableDataSource(this.profiles);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
