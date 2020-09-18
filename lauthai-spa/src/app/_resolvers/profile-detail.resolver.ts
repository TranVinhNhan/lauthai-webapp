import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProfile } from '../_models/interfaces/profile.interface';
import { ProfileService } from '../_services/profile.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileDetailResolver implements Resolve<IProfile> {

  constructor(private profileService: ProfileService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProfile | Observable<IProfile> | Promise<IProfile> {
    return this.profileService.getProfileById(+route.paramMap.get('id'));
  }
}
