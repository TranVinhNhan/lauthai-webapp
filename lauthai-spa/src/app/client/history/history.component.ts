import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Const } from 'src/app/_models/consts/const';
import { IHistoryOrder } from 'src/app/_models/interfaces/history-order.interface';
import { IOrder } from 'src/app/_models/interfaces/order.inteface';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-client-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit {

  orders: IHistoryOrder[] = [];
  dataSource: MatTableDataSource<IHistoryOrder>;
  displayedColumns = Const.TABLE_HISTORY;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderService: OrderService) {
    this.loadAllOrders();
    this.dataSource = new MatTableDataSource(this.orders);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadPaginator();
  }

  loadPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadAllOrders(): void {
    this.orderService.getOrdersOfUser().subscribe((response: IHistoryOrder[]) => {
      this.orders = response;
      this.dataSource = new MatTableDataSource(this.orders);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
