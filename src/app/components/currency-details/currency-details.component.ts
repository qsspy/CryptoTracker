import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyDetails } from 'src/app/common/currency-details';
import { CurrencyPriceHistory } from 'src/app/common/currency-price-history';
import { CurrencyChartService } from 'src/app/services/currency-chart.service';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { environment } from 'src/environments/environment';
import { Utils } from '../../common/utils'

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  private apiDelay = +environment.apiParams.apiCallDelay

  trackedCurrency : CurrencyDetails = new CurrencyDetails()
  currencyHistory : CurrencyPriceHistory = new CurrencyPriceHistory()

  constructor(private currencyChartService: CurrencyChartService,
              private currencyDataService : CurrencyDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const currencyID = this.route.snapshot.paramMap.get('id')!

    this.fetchCurrencyPriceHistory(currencyID)
    this.fetchCurrencyData(currencyID)
  }

  private fetchCurrencyPriceHistory(currencyID: string) {
    this.currencyChartService.getCurrencyPriceHistory(currencyID,new Date(2020,0,0))
    .subscribe(
      data => {
        this.currencyHistory = data[0]
      },
      async error => {
        await Utils.delay(this.apiDelay)
        this.fetchCurrencyPriceHistory(currencyID)
      }
    )
  }

  private fetchCurrencyData(currencyID: string) {
    
    this.currencyDataService.getSingleCurrencyData(currencyID).subscribe(
      data => {
        this.trackedCurrency = new CurrencyDetails(data[0])
      },
      async error => {
        await Utils.delay(this.apiDelay)
        this.fetchCurrencyData(currencyID)
      }
    )
  }
}
