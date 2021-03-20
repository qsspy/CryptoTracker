import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyDetails } from 'src/app/common/currency-details';
import { CurrencyPriceHistory } from 'src/app/common/currency-price-history';
import { CurrencyChartService } from 'src/app/services/currency-chart.service';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { environment } from 'src/environments/environment';
import { Utils } from '../../common/utils'
import { Chart } from 'node_modules/chart.js'
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { map } from 'rxjs/operators'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {


  private apiDelay = +environment.apiParams.apiCallDelay

  trackedCurrency?: CurrencyDetails
  currencyHistory: CurrencyPriceHistory = new CurrencyPriceHistory()

  chart: any

  constructor(private currencyChartService: CurrencyChartService,
    private currencyDataService: CurrencyDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const currencyID = this.route.snapshot.paramMap.get('id')!

    this.fetchCurrencyPriceHistory(currencyID)
    this.fetchCurrencyData(currencyID)
  }

  private fetchCurrencyPriceHistory(currencyID: string) {
    this.currencyChartService.getCurrencyPriceHistory(currencyID, new Date(2020, 0, 0))
      .subscribe(
        data => {
          this.currencyHistory = data[0]

          this.buildChart()
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

  private buildChart() {

    const ctx = (document.getElementById('myChart')! as HTMLCanvasElement).getContext('2d')!;
    // gradient background
    const gradient = ctx.createLinearGradient(0, 100, 0, 400);
    gradient.addColorStop(0, '#45A29EDD');
    gradient.addColorStop(1, '#45A29E20');

    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: this.currencyHistory.timestamps.map(date => new DatePipe('en-US').transform(date, 'yyyy-MM-dd')),
        datasets: [{
          label: 'Price',
          backgroundColor: gradient,
          borderColor: '#66FCF1',
          data: this.currencyHistory.prices
        }]
      },
      // Configuration options go here
      options: {
        maintainAspectRatio: false,
        legend: {
          labels: {
            // This more specific font property overrides the global property
            fontColor: 'azure'
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontColor: 'azure',
              autoSkip: true,
              autoSkipPadding: 12
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'azure',
              callback: function (value: number, index: number, values: number[]) {
                return Utils.getCurrencyString('$', value.toString())
              }
            }
          }],
        }
      },
      tooltips: {
        mode: 'dataset'
      },
      hover: {
        intersect: true
      },
      plugins: [{
        /* Adjust axis labelling font size according to chart size */
        beforeLayout: function (c: any) {
          const minChartFontSize = 10
          const maxChartFontSize = 16

          const chartWidth = c.chart.width;
          const size = chartWidth / 80;

          if(size < minChartFontSize) {
            c.scales['y-axis-0'].options.ticks.minor.fontSize = minChartFontSize;
            c.scales['x-axis-0'].options.ticks.minor.fontSize = minChartFontSize;
          } else if(size > maxChartFontSize) {
            c.scales['y-axis-0'].options.ticks.minor.fontSize = maxChartFontSize;
            c.scales['x-axis-0'].options.ticks.minor.fontSize = maxChartFontSize;
          } else {
            c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
            c.scales['x-axis-0'].options.ticks.minor.fontSize = size;
          }
        }
      }]
    })
  }
}
