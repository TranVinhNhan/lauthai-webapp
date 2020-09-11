import { AfterViewInit, Component, OnInit, ViewChild,Input,EventEmitter,Output } from '@angular/core';
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

  @Input() product:any;
  @Output() productAdd=new EventEmitter();


  displayedColumns: string[] = Const.TABLE_USER_COLUMN;
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];
  cart: IProfile[]=[];

  constructor(private profileService: ProfileService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((response: IProfile[]) => {
      this.profiles = response;
      this.dataSource = new MatTableDataSource(this.profiles);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error));
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.loadProfiles();
  }

  addProductToCart(carts)
  {

   this.cart=JSON.parse(localStorage.getItem("ListCart"));
   if(this.cart==undefined)
   {
     this.cart=[];
   }
    // this.productAdd.emit(product);
    this.cart.push(carts);
    console.log( this.cart);
    localStorage.setItem("ListCart",JSON.stringify(this.cart));

   // if(localStorage!=null)
   //  {
   //     this.cart.push(carts);
   //        localStorage.setItem("ListCart",JSON.stringify(this.cart));
   //  }else
   //  {
   //     this.cart.push(carts);
   //        localStorage.setItem("ListCart",JSON.stringify(this.cart));
   //  }


  }
}
