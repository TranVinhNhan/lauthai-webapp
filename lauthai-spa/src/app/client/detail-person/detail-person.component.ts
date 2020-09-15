import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';


@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {
   Profiledetail: IProfile;
  constructor( 
    public profileservice:ProfileService,
    public activatedRoute:ActivatedRoute
    
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

     }, error => console.log(error), ()=> {
     	this.Profiledetail=this.ListProfile.find(x=> x.id==id);
                  console.log(this.Profiledetail);


     });

     

   }

}
