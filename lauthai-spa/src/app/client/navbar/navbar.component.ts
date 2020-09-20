import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/_services/auth.service';
import { ExtensionService } from 'src/app/_services/extension.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private extension: ExtensionService
    ) { }

  ngOnInit(): void {
  }

  getUsername(): string {
      return this.authService.decodedToken.unique_name;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.extension.openSnackBar('Đăng xuất thành công', 'Bỏ qua');
  }
}
