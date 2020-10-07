import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExtensionService } from 'src/app/_services/extension.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        JwtModule.forRoot({ // https://github.com/auth0/angular2-jwt
          config: {
            tokenGetter: () => {
              return localStorage.getItem('token');
            },
            allowedDomains: ['localhost:5000'], // automatic attach token to request
            disallowedRoutes: ['localhost:5000/api/auth'] // request does not send token
          }
        }),
        SharedModule,
        AppRoutingModule
      ],
      providers: [JwtHelperService, ExtensionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should not be disable', async(() => {
    expect(component.loginForm.disabled).toBeFalse();
  }));

  it('form should be invalid when leave both fields empty', async(() => {
    component.loginForm.controls.username.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.invalid).toBeTrue();
  }));

  it('form should be invalid when leave password empty', async(() => {
    component.loginForm.controls.username.setValue('test');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.get('password').hasError('required')).toBeTrue();
    expect(component.loginForm.invalid).toBeTrue();
  }));

  it('form should be invalid when leave username empty', async(() => {
    component.loginForm.controls.username.setValue('');
    component.loginForm.controls.password.setValue('test');
    expect(component.loginForm.get('username').hasError('required')).toBeTrue();
    expect(component.loginForm.invalid).toBeTrue();
  }));

  it('form should be valid when fill username & password', async(() => {
    component.loginForm.controls.username.setValue('test');
    component.loginForm.controls.password.setValue('test');
    expect(component.loginForm.valid).toBeTrue();
  }));
});
