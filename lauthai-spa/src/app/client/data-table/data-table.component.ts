import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource,MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
//-------------------
import { IProfile } from './../../_interfaces/profile.interface';
import { ProfileService } from '../../_services/profile.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-client-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  // dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name','Avatar','School','Age','Work','married status','district','phone'];
    displayedColumns: string[] = ['id', 'name', 'pfpUrl', 'university', 'age', 'job', 'marriedStatus', 'district', 'phone'];
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];
 
 //-------------------------------------------
  constructor(private profileService: ProfileService,public dialog: MatDialog) {}


 //-------------------------------------------

  ngOnInit() {
    // this.dataSource = new DataTableDataSource();
    this.profiles = this.profileService.getProfiles(20);
    this.dataSource = new MatTableDataSource(this.profiles);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  //this.table.dataSource = this.dataSource;
        console.log("data-table-ngAfterViewInit");

  }
}
  