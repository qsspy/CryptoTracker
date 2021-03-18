import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyDetails, Status } from '../common/currency-details';
import { environment as env }  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(private httpClient: HttpClient) { }

  getCurrenciesPaginate(pageSize: number, pageNumber: number, status: Status) : Observable<HttpResponse<CurrencyDetails[]>> {

    const pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?per-page=${pageSize}&pageNumber=${pageNumber}&key=${env.apiParams.apiKey}&status=${status}`

    console.log(pathUrl)

    return this.httpClient.get<CurrencyDetails[]>(pathUrl,  {observe: 'response', responseType: 'json'})
  }

  getSingleCurrencyData(id: string): Observable<CurrencyDetails[]> {

    const pathUrl = `${env.apiParams.apiBaseUrl}/currencies/ticker?key=${env.apiParams.apiKey}&ids=${id}`

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
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
    const pathUrl= `${env.apiParams.apiBaseUrl}/currencies/ticker?key=${env.apiParams.apiKey}&status=dead`

    return this.httpClient.get<CurrencyDetails[]>(pathUrl)
  }
}
