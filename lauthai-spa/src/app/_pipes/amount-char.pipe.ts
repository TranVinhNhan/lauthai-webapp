import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountChar'
})
export class AmountCharPipe implements PipeTransform {

  transform(value: string ,start:number ,end : number):any //custom pipe
  {
     return value.substr(0,10) + '...';
  }


}
