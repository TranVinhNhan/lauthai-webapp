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
  CountCart:number;
  NewArray:any ;
   
  cartList: IProfile[]=[];

  ngOnInit(): void {
  	console.log(JSON.parse(localStorage.getItem("ListCart")));
  	// this.StorCart=JSON.parse(localStorage.getItem("product"));
  	this.cartList = JSON.parse(localStorage.getItem("ListCart"));
    console.log(this.cartList.keys);
     
  

  	  // this.cartList.forEach(a => {console.log(a)});

  	  // console.log(this.cartList[9]);

  }
    CheckCount(event, item)
  {

    console.log(event);
    console.log(this.cartList.indexOf(item));
    const index =this.cartList.indexOf(item);
      if (event.key === "0" && index > -1) {
         this.cartList.splice(index,1);
         localStorage.setItem("ListCart",JSON.stringify(this.cartList));

              console.log(this.cartList);

     }
       if (event === 0 && index > -1) {
         this.cartList.splice(index,1);
         localStorage.setItem("ListCart",JSON.stringify(this.cartList));
         
              console.log(this.cartList);

     }

  }
}
export interface CartStore
{
	 id : number;
	 name :string;
	 school :string;

	
}
