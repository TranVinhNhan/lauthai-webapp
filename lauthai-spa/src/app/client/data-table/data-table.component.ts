import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';


import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { Const } from './../../_models/consts/const';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';
import { CartService } from 'src/app/_services/cart.service';
import { ExtensionService } from 'src/app/_services/extension.service';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

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
  selection = new SelectionModel<IProfile>(true, []);

  profiles: IProfile[];
  AllList: IProfile[] = [];
  AllListCart: IProfile[] = [];
  cart: ICartItem[] = [];

  constructor(
    private profileService: ProfileService,
    private cartService: CartService,
    private extension: ExtensionService
  ) { }

  ngOnInit(): void {
    // this.isAllSelected();
    this.loadProfiles();

  }

  ngAfterViewInit(): void {
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((response: IProfile[]) => {
      this.profiles = response;
      this.dataSource = new MatTableDataSource(this.profiles);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error));
  }

  addItemToCart(selectedItem: IProfile): void {
    this.cartService.addItemToCart(selectedItem);
    this.extension.openSnackBar('Thêm hàng vào giỏ thành công', 'Bỏ qua');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {

    const numSelected = this.selection.selected.length;

    //  console.log(this.selection.selected);

    const numRows = this.dataSource?.data.length;

    return numSelected === numRows;
  }

  ProfileToCart(profile: IProfile): ICartItem {
    const cart = {} as ICartItem;
    cart.id = profile.id;
    cart.name = profile.name;
    cart.pfpUrl = profile.pfpUrl;
    cart.phone = profile.phone;
    cart.price = profile.price;
    cart.quantity = 1;
    cart.universityName = profile.university.name;
    return cart;
  }

  getAllCheck() {
    if (localStorage.getItem(Const.CART)) 
    {
      const cart: ICartItem[] = JSON.parse(localStorage.getItem(Const.CART));
      if (cart.length > 0) 
      {
        this.selection.selected.forEach(selectedProfile => {
          const profileIndexOfCart = cart.indexOf(cart.find(p => p.id === selectedProfile.id));
          if (profileIndexOfCart > -1) {
            cart[profileIndexOfCart].quantity++;
          } else {
            cart.push(this.ProfileToCart(selectedProfile));
          }
        });
      }
      localStorage.setItem(Const.CART, JSON.stringify(cart));
    } 
    else 

    {
      const cart: ICartItem[] = [];
      this.selection.selected.forEach(selectedProfile => {
        cart.push(this.ProfileToCart(selectedProfile));
      });
      localStorage.setItem(Const.CART, JSON.stringify(cart));
    }
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    console.log("masterToggle");

    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: IProfile): string {


    if (!row) {
      // console.log(`${this.isAllSelected() ? 'select' : 'deselect'} all`);
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // console.log(`${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`);

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  CartItemToProfile(cartItem: ICartItem): IProfile {
    const pf = {} as IProfile;
    pf.id = cartItem.id;
    pf.name = cartItem.name;
    pf.pfpUrl = cartItem.pfpUrl;
    pf.phone = cartItem.phone;
    pf.price = cartItem.price;
    pf.university.name = cartItem.universityName;

    return pf;
  }

}
