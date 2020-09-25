import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Const } from '../_models/consts/const';
import { ICartItem } from '../_models/interfaces/cartItem.interface';
import { IProfile } from '../_models/interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addItemToCart(selectedItem: IProfile): void {
    if (localStorage.getItem(Const.CART)) {
      const cart: ICartItem[] = JSON.parse(localStorage.getItem(Const.CART));
      const duplicateItemIndex = cart.indexOf(cart.find((item: ICartItem) => item.id === selectedItem.id), 0);

      if (duplicateItemIndex > -1) {
        cart[duplicateItemIndex].quantity++;
      } else {
        const cartItem: ICartItem = {
          id: selectedItem.id,
          pfpUrl: selectedItem.pfpUrl,
          name: selectedItem.name,
          phone: selectedItem.phone,
          universityName: selectedItem.university.name,
          categoryName: selectedItem.category.nameCategory,
          price: selectedItem.price,
          quantity: 1
        };
        cart.push(cartItem);
      }
      localStorage.setItem(Const.CART, JSON.stringify(cart));
    } else {
      const cart = [];
      const cartItem: ICartItem = {
        id: selectedItem.id,
        pfpUrl: selectedItem.pfpUrl,
        name: selectedItem.name,
        phone: selectedItem.phone,
        universityName: selectedItem.university.name,
        categoryName: selectedItem.category.nameCategory,
        price: selectedItem.price,
        quantity: 1
      };
      cart.push(cartItem);
      localStorage.setItem(Const.CART, JSON.stringify(cart));
    }
  }

  deleteItemFromCart(selectedItem: ICartItem): void {
    const cart: ICartItem[] = JSON.parse(localStorage.getItem(Const.CART));
    const selectedItemIndex = cart.indexOf(cart.find(item => item.id === selectedItem.id));
    if (selectedItemIndex > -1) {
      cart.splice(selectedItemIndex, 1);
      if (cart.length > 0) {
        localStorage.setItem(Const.CART, JSON.stringify(cart));
      } else {
        localStorage.removeItem(Const.CART);
      }
    }
  }

  getTotal(): number {
    const cart: ICartItem[] = JSON.parse(localStorage.getItem(Const.CART));
    return cart.map(item => item.price * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  changeQuantity(selectedItem: ICartItem, action: number): void {
    const cart: ICartItem[] = JSON.parse(localStorage.getItem(Const.CART));
    const selectedItemIndex = cart.indexOf(cart.find(item => item.id === selectedItem.id));
    if (selectedItemIndex > -1) {
      cart[selectedItemIndex].quantity += action;
      if (cart[selectedItemIndex].quantity === 0) {
        cart.splice(selectedItemIndex, 1);
        if (cart.length > 0) {
          localStorage.setItem(Const.CART, JSON.stringify(cart));
        } else {
          localStorage.removeItem(Const.CART);
        }
      } else {
        localStorage.setItem(Const.CART, JSON.stringify(cart));
      }
    }
  }

  placeOrder(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'order', model);
  }
}
