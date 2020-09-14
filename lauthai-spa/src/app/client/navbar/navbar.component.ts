import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  getUsername(): string {
      return this.authService.decodedToken.unique_name;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.openSnackBar('Đăng xuất thành công', 'Bỏ qua');
  }
}
