import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
}
