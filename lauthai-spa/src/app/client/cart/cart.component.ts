import { Component, OnInit } from '@angular/core';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  public StorCart: CartStore;
  public StorCartFirst: CartStore;

  cartList: IProfile[] = [];

  ngOnInit(): void {
    this.cartList = JSON.parse(localStorage.getItem('ListCart'));
  }

  CheckCount(event, item: IProfile): void {
    const index = this.cartList.indexOf(item);
    const Downquantity = this.cartList.find(x => x.id === item.id);
    localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    if (event.key === '0' || event.keycode <= 0 || Downquantity.quantity < 0 && index > -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    }
    if (event === 0 && index > -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    }

  }

  Increase(id: number, item: IProfile): void {
    const Upquantity = this.cartList.find(x => x.id === id);
    Upquantity.quantity++;
    localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    const index = this.cartList.indexOf(item); // vị trí của object trong mảng  và event lấy số lượng trong input
  }

  Reduced(id: number, item: IProfile): void {
    const Downquantity = this.cartList.find(x => x.id === id);
    Downquantity.quantity--;
    localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    const index = this.cartList.indexOf(item); // vị trí của object trong mảng  và event lấy số lượng trong input
    if (Downquantity.quantity === 0 && index > -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('ListCart', JSON.stringify(this.cartList));
    }
  }
}
export interface CartStore {
  id: number;
  name: string;
  school: string;
}
