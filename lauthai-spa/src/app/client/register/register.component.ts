import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/_models/interfaces/register.interface';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hidePwd = true;
  hideCfmPwd = true;
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }, { validators: this.matchPassword });
  }

  matchPassword(formGroup: FormGroup): { [key: string]: boolean } {
    if (formGroup.get('password').value === formGroup.get('confirmPassword').value) {
      return null;
    }
    return { matchPassword: true };
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const info = {
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value,
        email: this.registerForm.get('email').value,
      };

      this.authService.register(info).subscribe((response: any) => {
        console.log(response);
        this.openSnackBar('Đăng kí tài khoản thành công', 'Bỏ qua');
      }, error => {
        console.log(error);
        this.openSnackBar(error.error, 'Bỏ qua');
      }, () => {
        const account = { username: info.username, password: info.password };
        this.authService.login(account).subscribe((response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        }, error => this.openSnackBar(error.error, 'Bỏ qua'));
      });
    }
  }
}
