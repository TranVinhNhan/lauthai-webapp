import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { Const } from './../../_models/consts/const';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';
import { CartService } from 'src/app/_services/cart.service';
import { ExtensionService } from 'src/app/_services/extension.service';

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
  cart: ICartItem[] = [];

  constructor(
    private profileService: ProfileService,
    private cartService: CartService,
    private extension: ExtensionService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((response: IProfile[]) => {
      this.profiles = response;
      this.dataSource = new MatTableDataSource(this.profiles);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(this.profiles[0].images[0].url);
    }, error => console.log(error));
  }

  addItemToCart(selectedItem: IProfile): void {
    this.cartService.addItemToCart(selectedItem);
    this.extension.openSnackBar('Thêm hàng vào giỏ thành công', 'Bỏ qua');
  }

  getMainPfpUrl(profile: IProfile): string {
    return this.extension.getMainPfpUrl(profile);
  }
}
