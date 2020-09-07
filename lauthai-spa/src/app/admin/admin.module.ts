import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ManagementComponent } from './management/management.component';
import { CreateProfileDialogComponent } from './management/create-profile-dialog/create-profile-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProfileDialogComponent } from './management/update-profile-dialog/update-profile-dialog.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, ManagementComponent, CreateProfileDialogComponent, UpdateProfileDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
