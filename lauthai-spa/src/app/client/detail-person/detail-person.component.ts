import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { ProfileService } from '../../_services/profile.service';
import { IProfile } from './../../_models/interfaces/profile.interface';
import { ICartItem } from './../../_models/interfaces/cartItem.interface';
import { ExtensionService } from 'src/app/_services/extension.service';


@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {

  profileDetail: IProfile;
  cart: ICartItem[] = [];

  constructor(
    public profileService: ProfileService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private extension: ExtensionService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.activatedRoute.data.subscribe(data => this.profileDetail = data.profile, error => console.log(error));
  }

  addToCart(pf: IProfile): void {
    if (localStorage.getItem('ListCart')) {
      const cart = JSON.parse(localStorage.getItem('ListCart'));
      const duplicateItem = cart.find((item: IProfile) => item.id === pf.id);
      if (duplicateItem) {
        duplicateItem.quantity++;
        localStorage.setItem('ListCart', JSON.stringify(cart));
      } else {
        // pf.quantity = 1;
        cart.push(pf);
        localStorage.setItem('ListCart', JSON.stringify(cart));
      }
    } else {
      const cart: IProfile[] = [];
      cart.push(pf);
      localStorage.setItem('ListCart', JSON.stringify(cart));
    }
    this.extension.openSnackBar('Đã thêm vào giỏ hàng', 'Bỏ qua');
    this.router.navigate(['/cart']);
  }
}
