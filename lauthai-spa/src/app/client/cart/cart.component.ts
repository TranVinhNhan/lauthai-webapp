import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Const } from 'src/app/_models/consts/const';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CartService } from 'src/app/_services/cart.service';
import { ExtensionService } from 'src/app/_services/extension.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = Const.TABLE_CART;
  dataSource: MatTableDataSource<ICartItem>;
  cart: ICartItem[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cartService: CartService, private extension: ExtensionService) {
    this.loadCart();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadSortAndPaginator();
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem(Const.CART));
    this.dataSource = new MatTableDataSource(this.cart);
  }

  loadSortAndPaginator(): void {
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

  deleteItem(selectedItem: ICartItem): void {
    this.cartService.deleteItemFromCart(selectedItem);
    this.loadCart();
    this.extension.openSnackBar('Xóa hàng ra khỏi giỏ thành công', 'Bỏ qua');
  }
}
