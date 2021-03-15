import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyDetails, Status } from '../common/currency-details';
import { environment as env, environment }  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  callTime = +environment.apiParams.lastApiCallTime
  delay = +environment.apiParams.apiCallDelay

  constructor(private httpClient: HttpClient) { }

  getCurrenciesPaginate(pageSize: number, pageNumber: number, status: Status) : Observable<HttpResponse<CurrencyDetails[]>> {

    const pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?per-page=${pageSize}&pageNumber=${pageNumber}&key=${env.apiParams.apiKey}&status=${status}`

    console.log(pathUrl)

    return this.httpClient.get<CurrencyDetails[]>(pathUrl,  {observe: 'response', responseType: 'json'})
  }

  getCurrencies(status: Status) {
   
    const pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?key=${env.apiParams.apiKey}&status=${status}`

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }

  getNewCurrenciesPaginate(count: number): Observable<CurrencyDetails[]> {

    const pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?key=${env.apiParams.apiKey}&filter=new&sort=first_priced_at&per-page=${count}`
    
    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }

  getDeadCurrencies() {
    const pathUrl= "https://api.nomics.com/v1/currencies/ticker?key=55d84b148306c0ca09e7abeaf24deb17&status=dead"

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }
}
