import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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
  selection = new SelectionModel<IProfile>(true, []);

  profiles: IProfile[];
  cart: ICartItem[] = [];

  constructor(
    private profileService: ProfileService,
    private cartService: CartService,
    private extension: ExtensionService
  ) { }

  ngOnInit(): void {
    this.isAllSelected();
  }

  ngAfterViewInit(): void {
    this.loadProfiles();
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
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: IProfile): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
