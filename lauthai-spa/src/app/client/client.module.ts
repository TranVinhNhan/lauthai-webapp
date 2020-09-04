import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

// ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RegisterComponent } from './register/register.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientComponent, CarouselComponent, LoginComponent, HomeComponent, BannerComponent, DataTableComponent, RegisterComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,

    CarouselModule.forRoot(),

    MatTableModule,

    MatPaginatorModule,

    MatSortModule
  ]
})
export class ClientModule { }
