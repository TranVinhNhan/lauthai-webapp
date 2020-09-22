import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileDetailResolver } from '../_resolvers/profile-detail.resolver';
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'detail-person/:id', component: DetailPersonComponent, resolve: { profile: ProfileDetailResolver } },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'account', component: UserInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
