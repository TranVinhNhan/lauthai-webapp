import { AfterViewInit, Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { Const } from './../../_models/consts/const';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';

@Component({
  selector: 'app-client-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() product: any;
  @Output() productAdd = new EventEmitter();


  displayedColumns: string[] = Const.TABLE_USER_COLUMN;
  dataSource: MatTableDataSource<IProfile>;
  profiles: IProfile[];
  cart: ICartItem[] = [];

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

  addProductToCart(cartItem: IProfile): void {
    let item = {} as ICartItem;
    item = Object.assign({}, cartItem);
    this.cart = JSON.parse(localStorage.getItem('ListCart'));
    if (this.cart === undefined) // gio hang rong
    {

      item.universityName = cartItem.university.name;
      item.quantity = 1;
      this.cart = [];
      this.cart.push(item);
      localStorage.setItem('ListCart', JSON.stringify(this.cart));
    } else { // gio hang cp cart item
      const result = this.cart.find(el => el.id === cartItem.id);
      item.quantity = 1;
      // check da co item cung loai chua? ++quantity : them sp moi
      if (result != null) {
        result.quantity++;
        localStorage.setItem('ListCart', JSON.stringify(this.cart));

      } else {
        this.cart.push(item);
        localStorage.setItem('ListCart', JSON.stringify(this.cart));
      }
    }
  }
}
