import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  Avatar: string;
  School: string;
  Age: number;
  Work: string;
  married_status:string;
  district:number;
  phone:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478",name: 'Hồng',Avatar:"https://lh3.googleusercontent.com/proxy/IOc-Am-bePxE3wswLEaabHSyE8_Ll7LO9Je4qlzL7q8T0q-x06qtdX5oRs1hl7WBWaMD0Hr1VOW4cU77TD-ay-jcekRztnYYiI2lTTEmHtFgeuYA28Fr4ps7ngmnVcHi5bW0n20yxUNR-Ri6o2xzmP1S-qsu"},
  {id: 2,School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'nhung',Avatar:"https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg"},
  {id: 3,School:"hutech",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'tuyết',Avatar:"https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg"},
  {id: 4,School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'tình',Avatar:"https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2000-de-thuong.jpg"},
  {id: 5,School:"hutech",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'tam',Avatar:"https://4.bp.blogspot.com/-983QtP5mKzY/WyEd9tw7lYI/AAAAAAAAwPA/hHxSPxoXZUMbfn8bYZbFhJzsRUrFOzsygCLcBGAs/s640/anh-girl-xinh-chon-loc-1.jpg"},
  {id: 6,School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'như',Avatar:"https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"},
  {id: 7,School:"hutech",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'nhi',Avatar:"https://thuthuatnhanh.com/wp-content/uploads/2019/12/hinh-anh-gai-xinh-de-thuong-2.jpg"},
  {id: 8,School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'hoa',Avatar:"https://danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-ha-noi-6.jpg"},
  {id: 9,School:"hutech",Age:18,Work:"Sinh viên", married_status:"single",district:12,phone:"039441478",name: 'linh',Avatar:"https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg"},
  {id: 10,School:"Huflit",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'lan',Avatar:"https://congngheads.com/media/images/anh-dep/hinh-nen-dep-2016-1559616366/bo-anh-gai-xinh-ao-do-dang-la-luot-tren-phim-dan-lam-hinh-nen-20-07-2019-1.jpg"},
  {id: 11,School:"hutech",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'ngọc',Avatar:"https://i.pinimg.com/236x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg"},
  {id: 12,School:"Huflit",Age:18,Work:"Sinh viên", married_status:"single",district:12,phone:"039441478",name: 'hoa khoa',Avatar:"https://i.pinimg.com/564x/3c/dd/56/3cdd56556aaf558988e225c312d34e97.jpg"},
  {id: 13,School:"hutech",Age:18,Work:"Sinh viên",married_status:"single",district:12,phone:"039441478", name: 'tam',Avatar:"https://congngheads.com/media/images/anh-dep/hinh-nen-android-dep-1559622870/anh-gai-xinh-mac-kimono-hong-duyen-dang-04-08-2019-2.jpg"},


];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
