import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/_models/interfaces/user.interface';
import { AuthService } from 'src/app/_services/auth.service';
import { ExtensionService } from 'src/app/_services/extension.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-client-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  updateForm: FormGroup;
  user: IUser;
  submitted = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private extension: ExtensionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initUpdateForm();
    this.loadUserInfo();
    this.submitted = false;
  }

  loadUserInfo(): void {
    this.userService.getUserById(this.authService.decodedToken.nameid).subscribe((response: IUser) => {
      this.user = response;
      this.updateForm.get('fullName').setValue(this.user.fullName);
      this.updateForm.get('email').setValue(this.user.email);
    }, error => { });
  }

  initUpdateForm(): void {
    this.updateForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const isTheSame = JSON.stringify(this.updateForm.value) === JSON.stringify({ fullName: this.user.fullName, email: this.user.email });
      if (isTheSame) {
        this.extension.openSnackBar('Thông tin không được cập nhật do không có thay đổi', 'Bỏ qua');
      } else {
        this.userService.updateInfo(this.updateForm.value).subscribe(() => {
          this.extension.openSnackBar('Cập nhật tài khoản thành công', 'Bỏ qua');
          this.submitted = true;
        }, error => { });
      }
    }
  }

  onReturnToHomePage(): void {
    this.router.navigate(['/']);
  }
}
