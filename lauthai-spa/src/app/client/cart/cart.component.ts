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
  public StorCart :CartStore;
  public StorCartFirst :CartStore;
   
  cartList: IProfile[]=[];

  ngOnInit(): void {
  	// console.log(JSON.parse(localStorage.getItem("ListCart")));
  	// this.StorCart=JSON.parse(localStorage.getItem("product"));
  	this.cartList = JSON.parse(localStorage.getItem("ListCart"));
    // console.log(this.cartList.keys);
     
  

  	  // this.cartList.forEach(a => {console.log(a)});

  	  // console.log(this.cartList[9]);

  }
    CheckCount(event, item)
  {
    const index =this.cartList.indexOf(item);
        // console.log(index)

      if (event.key === "0" && index > -1) {
         this.cartList.splice(index,1);
         localStorage.setItem("ListCart",JSON.stringify(this.cartList));

     }
       if (event === 0 && index > -1) {
         this.cartList.splice(index,1);
         localStorage.setItem("ListCart",JSON.stringify(this.cartList));
         
     }

  }
  Increase(id,event,item)
  {
    console.log( id);
      const Upquantity= this.cartList.find(x=> x.id ==id);
        Upquantity.quantity++ ;
          localStorage.setItem('ListCart',JSON.stringify(this.cartList));

         
           const index =this.cartList.indexOf(item); //vị trí của object trong mảng  và event lấy số lượng trong input

           // console.log( Upquantity);
           // console.log( index);
     //       if (Upquantity.quantity === 0 && index > -1 ) 
     //       {
     //     this.cartList.splice(index,1);
     //     localStorage.setItem("ListCart",JSON.stringify(this.cartList));
         
     // }
     


  } 

  reduced(id,event,item)
  {
    console.log( id);
  const Downquantity= this.cartList.find(x=> x.id ==id);
      Downquantity.quantity-- ;
          localStorage.setItem('ListCart',JSON.stringify(this.cartList));


     
           const index =this.cartList.indexOf(item); //vị trí của object trong mảng  và event lấy số lượng trong input
           console.log( index);
           console.log( event.key);
           console.log( Downquantity.quantity);
           if (Downquantity.quantity === 0 || event.key==='0' && index > -1 ) {
         this.cartList.splice(index,1);
         localStorage.setItem("ListCart",JSON.stringify(this.cartList));
         
     }

     //       if (Downquantity.quantity === 0 && event.key==='0' ) {
     //     this.cartList.splice(index,1);
     //     localStorage.setItem("ListCart",JSON.stringify(this.cartList));
         
     // }


  }
}
export interface CartStore
{
	 id : number;
	 name :string;
	 school :string;

	
}
