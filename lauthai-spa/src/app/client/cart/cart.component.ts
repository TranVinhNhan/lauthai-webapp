import { Component, OnInit } from '@angular/core';
import { IProfile } from './../../_models/interfaces/profile.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  public StorCart :CartStore;
  public StorCartFirst :CartStore;

  cartList: IProfile[]=[];

  ngOnInit(): void {
  	console.log(JSON.parse(localStorage.getItem("ListCart")));
  	// this.StorCart=JSON.parse(localStorage.getItem("product"));
  	this.cartList = JSON.parse(localStorage.getItem("ListCart"));
  	  	console.log("day la "+this.cartList );

  	  // this.cartList.forEach(a => {console.log(a)});

  	  // console.log(this.cartList[9]);

  }
  
}
export interface CartStore
{
	 id : number;
	 name :string;
	 school :string;

	
}
