import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ExtensionService } from 'src/app/_services/extension.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hidePwd = true;
  hideCfmPwd = true;
  registerForm: FormGroup;
  isAuthenticated = false;
  matcher = new MyErrorStateMatcher();

  @Output() changeTabIndex = new EventEmitter<number>();
  constructor(
    private authService: AuthService,
    private extension: ExtensionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  initRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    }, { validators: this.matchPassword });
  }

  matchPassword(formGroup: FormGroup): { [key: string]: boolean } {
    if (formGroup.get('password').value === formGroup.get('confirmPassword').value) {
      return null;
    }
    return { matchPassword: true };
  }

  onChangeToLoginTab(): void {
    this.changeTabIndex.emit(0);
  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      const info = {
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value,
        email: this.registerForm.get('email').value,
      };

      this.authService.register(info).subscribe((response: any) => {
        this.extension.openSnackBar('Đăng kí tài khoản thành công', 'Bỏ qua');
      }, error => { }, () => {
        const account = { username: info.username, password: info.password };
        this.authService.login(account).subscribe((response: any) => {
          this.router.navigate(['/']);
        }, error => { });
      });
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
