import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCurrencyForm'
})
export class ShortCurrencyFormPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
