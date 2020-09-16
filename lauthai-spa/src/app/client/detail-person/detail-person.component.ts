import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';



import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';


@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {
   Profiledetail: IProfile;
     cart: ICartItem[]=[];
  constructor( 
    public profileservice:ProfileService,
    public activatedRoute:ActivatedRoute,
     public router:Router,


    
  	) { }
   ListProfile: IProfile[];
  ngOnInit(): void {
        this.LoadInfo()
  	    
  }

   LoadInfo()
   {
   	let id ;
   	this.activatedRoute.params.subscribe(data =>{
         id=data.id;
          console.log(id);
    

  	    });

     this.profileservice.getProfiles().subscribe(data =>
     {
           this.ListProfile=data;
           console.log(data)

     }, error => console.log(error), ()=> {
     	this.Profiledetail=this.ListProfile.find(x=> x.id==id);


     });

     

   }
   RouteURL()
   {

        this.activatedRoute.params.subscribe(data =>
        {
         
       
          this.Profiledetail=this.ListProfile.find(x=>x.id==data.id);

                         console.log(this.Profiledetail);

//      let item = {} as ICartItem;
//      item = Object.assign({}, this.Profiledetail);
//       this.cart=JSON.parse(localStorage.getItem("ListCart"));
//    if(this.cart==undefined) // gio hang rong
//    {

//      item.universityName = this.Profiledetail.university.name;
//      item.quantity = 1;
//      this.cart=[];
//      this.cart.push(item);
//       localStorage.setItem("ListCart",JSON.stringify(this.cart));
//    }
//   else  // gio hang cp cart item
//   {

//       const result = this.cart.find(el => el.id ==this.Profiledetail.id);
//       console.log(result);
//       item.quantity = 1;
// // check da co item cung loai chua? ++quantity : them sp moi
//       if (result != null)
//     {
//       result.quantity++;
//       localStorage.setItem("ListCart",JSON.stringify(this.cart));

//     }
//     else
//     {
//       this.cart.push(item);
//       localStorage.setItem("ListCart",JSON.stringify(this.cart));
//     }



//   }

        // console.log( this.cart);

        });
      


   }

}
