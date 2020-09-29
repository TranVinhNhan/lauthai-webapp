import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { IProfile } from '../_models/interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})

export class ExtensionService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(
    message: string, action: string, duration = 2000,
    horizontalPosition: MatSnackBarHorizontalPosition = 'center',
    verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  ): void {
    this.snackBar.open(message, action, { duration, horizontalPosition, verticalPosition });
  }

  getMainPfpUrl(profile: IProfile): string {
    return profile.images.find(img => img.isMainPfp === true).url;
  }
}
