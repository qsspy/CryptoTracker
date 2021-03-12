import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyDetails, Status } from '../common/currency-details';
import { environment as env }  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(private httpClient: HttpClient) { }

  getCurrenciesPaginate(pageSize: number, pageNumber: number, status: Status) : Observable<CurrencyDetails[]> {

    let pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?per-page=${pageSize}&pageNumber=${pageNumber}&key=${env.apiParams.apiKey}&status=${status}`

    console.log(pathUrl)

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }

  getCurrencies(status: Status) {
    let pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker
                  ?key=${env.apiParams.apiKey}
                  &status=${status}`

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }
}
