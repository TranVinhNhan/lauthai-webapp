import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Const } from 'src/app/_models/consts/const';
import { ICartItem } from 'src/app/_models/interfaces/cartItem.interface';
import { IOrderDetail } from 'src/app/_models/interfaces/order-detail.interface';
import { IOrder } from 'src/app/_models/interfaces/order.inteface';
import { AuthService } from 'src/app/_services/auth.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  cart: ICartItem[] = [];
  checkoutForm: FormGroup;
  timeleft = 5;
  subscribeTimer = 5;
  isOrderPlaced = false;
  timerHost: Subscription;
  orderId: number;

  constructor(
    private datePipe: DatePipe,
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadCart();
    this.initCheckoutForm();
  }

  ngOnDestroy(): void {
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem(Const.CART));
  }

  initCheckoutForm(): void {
    this.checkoutForm = new FormGroup({
      customerFullname: new FormControl(this.authService.decodedToken.unique_name, Validators.required),
      customerPhone: new FormControl('', Validators.required),
      meetingPlace: new FormControl('', Validators.required),
      meetingDate: new FormControl('', Validators.required),
      option: new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const order = this.checkoutForm.value as IOrder;
      order.meetingDate = this.datePipe.transform(this.checkoutForm.get('meetingDate').value, 'yyyy-MM-dd');
      const cart = JSON.parse(localStorage.getItem(Const.CART));
      const orderDetails: IOrderDetail[] = [];
      cart.forEach((item: ICartItem) => {
        orderDetails.push(
          {
            quantity: item.quantity,
            profileId: item.id,
            priceAtBuyTime: item.price,
            nameAtBuyTime: item.name,
            phoneAtBuyTime: item.phone
          });
      });

      order.orderDetails = orderDetails;
      this.cartService.placeOrder(order).subscribe((response: any) => {
        this.orderId = response.id;
        this.observableTimer();
        this.isOrderPlaced = true;
        localStorage.removeItem(Const.CART);
      }, error => { console.log(error); });
    }
  }

  observableTimer(): void {
    const source = timer(1000, 1000);
    this.timerHost = source.subscribe(value => {
      this.subscribeTimer = this.timeleft - value;
      if (this.subscribeTimer === 0) {
        this.router.navigate(['/']);
        this.timerHost.unsubscribe();
      }
    });
  }
}
