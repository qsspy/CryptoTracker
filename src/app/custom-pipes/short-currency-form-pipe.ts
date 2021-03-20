import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../common/utils';

@Pipe({name: 'ShortCurrencyForm'})
export class ShortCurrencyFormPipe implements PipeTransform{
    transform(value: any, currencySymbol?: string) {
        return Utils.getShortenedMoneyValue(value,currencySymbol)
    }
}
