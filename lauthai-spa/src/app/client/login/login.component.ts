import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from './../../_services/auth.service';
import { ExtensionService } from './../../_services/extension.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  errorText: string;
  isAuthenticated = false;

  @Output() changeTabIndex = new EventEmitter<number>();

  constructor(
    private authService: AuthService,
    private extension: ExtensionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onChangeToRegisterTab(): void {
    this.changeTabIndex.emit(1);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        if (this.authService.isAuthenticated()) {
          if (this.authService.decodedToken.role === 'Admin') {
            this.router.navigate(['/admin']);
            this.extension.openSnackBar('Đăng nhập thành công dưới quyền Admin', 'Bỏ qua', 5000);
          } else {
            this.router.navigate(['/']);
            this.extension.openSnackBar('Đăng nhập thành công', 'Bỏ qua', 5000);
          }
        }
      }, error => {
      });
    }
  }
}
