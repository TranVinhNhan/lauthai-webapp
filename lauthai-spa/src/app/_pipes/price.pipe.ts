import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'K'
})

export class PricePipe implements PipeTransform {
  transform(value: number): string {
    if (value > 1000) {
      return value / 1000 + 'K';
    }
    if (value > 1000000) {
      return value / 1000000 + 'M';
    }
    return value.toString();
  }
}
