import { Component, OnInit } from '@angular/core';
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

  constructor(
    private authService: AuthService,
    private extension: ExtensionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['/']);
          this.extension.openSnackBar('Đăng nhập thành công', 'Bỏ qua');
        }
      }, error => {
      });
    }
  }
}
