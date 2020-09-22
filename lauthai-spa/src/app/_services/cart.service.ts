import { Injectable } from '@angular/core';
import { Const } from '../_models/consts/const';
import { ICartItem } from '../_models/interfaces/cartItem.interface';
import { IProfile } from '../_models/interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

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
}
