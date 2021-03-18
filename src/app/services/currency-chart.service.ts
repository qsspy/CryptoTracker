import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyDetails } from '../common/currency-details';
import { environment as env}  from '../../environments/environment'
import { CurrencyPriceHistory } from '../common/currency-price-history';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../common/utils';
import { CurrencyIntervalHistory } from '../common/currency-interval-history';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyChartService {

  constructor(private httpClient: HttpClient) { }

  getCurrencyPriceHistory(id: string, startDate: Date, endDate?: Date): Observable<CurrencyPriceHistory[]> {

    const startDateRFC = Utils.dateToRFC(startDate, true)

    let pathUrl = `${env.apiParams.apiBaseUrl}/currencies/sparkline?key=${env.apiParams.apiKey}&ids=${id}&start=${startDateRFC}`

    if(endDate) {

      const endDateRFC = Utils.dateToRFC(endDate, true)
      pathUrl = pathUrl + `&end=${endDateRFC}`
    }

    return this.httpClient.get<CurrencyPriceHistory[]>(pathUrl)
  }
}
