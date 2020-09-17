import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './_services/error-handling-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminGuard } from './_guards/admin.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent // https://codepen.io/ckroll17/pen/MzWgLo
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // issue 1 + issue 2: navbar + footer
    MatSnackBarModule,
    JwtModule.forRoot({ // https://github.com/auth0/angular2-jwt
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:5000'], // automatic attach token to request
        disallowedRoutes: ['localhost:5000/api/auth'] // request does not send token
      }
    })
  ],
  providers: [httpInterceptorProviders, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
