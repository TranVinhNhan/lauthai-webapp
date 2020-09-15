import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // issue 1 + issue 2: navbar + footer
    JwtModule.forRoot({ // https://github.com/auth0/angular2-jwt
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['http://localhost:5000'], // automatic attach token to request
        disallowedRoutes: ['http://localhost:5000/api/auth'] // request does not send token
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
