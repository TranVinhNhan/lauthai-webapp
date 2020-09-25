import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHistoryOrder } from '../_models/interfaces/history-order.interface';
import { IOrder } from '../_models/interfaces/order.inteface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getOrdersOfUser(): Observable<IHistoryOrder[]> {
    return this.http.get<IHistoryOrder[]>(this.baseUrl + 'order/user');
  }

}
