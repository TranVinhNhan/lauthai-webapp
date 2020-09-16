import { Component, OnInit } from '@angular/core';
import { ExtensionService } from 'src/app/_services/extension.service';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.scss']
})
export class AnonymousComponent implements OnInit {

  currentIndex = 0;
  constructor(private extension: ExtensionService) { }

  ngOnInit(): void {
    this.extension.openSnackBar(
      'Vui lòng đăng nhập hoặc đăng kí để tiếp tục sử dụng dịch vụ',
      'Bỏ qua', 20000, 'right', 'bottom');
  }

  onChangeTab(index: number): void {
    this.currentIndex = index;
  }
}
