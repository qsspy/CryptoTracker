import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CurrencyDetails, Status } from 'src/app/common/currency-details';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator';
import { environment } from '../../../environments/environment'
import { CurrencyChartService } from 'src/app/services/currency-chart.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit, AfterViewInit  {

  dataLoaded = false

  currentPage = 0
  currentPageSize = 20
  rowsTotal = 100

  currenciesDetails: CurrencyDetails[] = []
  deadCurrencies: CurrencyDetails[] = []

  displayedColumns: string[] = ['rank','id','price',
                                'day_change_percent','week_change_percent','month_change_percent',
                                'year_change_percent','details_btn'];
  dataSource = new MatTableDataSource<CurrencyDetails>(this.currenciesDetails);

  @ViewChild(MatSort, {static: false}) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private currencyDataService: CurrencyDataService,
              private currencyChartService : CurrencyChartService) {}
  
  ngOnInit(): void {

    this.dataLoaded = false
    
  }

  ngAfterViewInit(): void {

    this.currencyDataService.getCurrenciesPaginate(this.rowsTotal, 1, Status.ACTIVE).subscribe(
      (data) => {
        this.currenciesDetails = data.body!.map(item => new CurrencyDetails(item))

        this.dataSource = new MatTableDataSource<CurrencyDetails>(this.currenciesDetails);

        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator

        this.dataLoaded = true
      }
    )
  }
}

