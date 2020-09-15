import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from './../shared/shared.module';

// ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnonymousComponent } from './_anonymous/anonymous.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    ClientComponent,
    CarouselComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    DataTableComponent,
    RegisterComponent,
    FooterComponent,
    CartComponent,
    NavbarComponent,
    AnonymousComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,

    CarouselModule.forRoot()
  ]
})
export class ClientModule { }
