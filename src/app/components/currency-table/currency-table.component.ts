import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CurrencyDetails, Status } from 'src/app/common/currency-details';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort'
import { ThrowStmt } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit, AfterViewInit  {

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

  constructor(private currencyDataService: CurrencyDataService) {}
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    this.currencyDataService.getCurrenciesPaginate(this.rowsTotal, 1, Status.ACTIVE).subscribe(
      (data) => {
        this.currenciesDetails = data.body!.map(item => new CurrencyDetails(item))

        this.dataSource = new MatTableDataSource<CurrencyDetails>(this.currenciesDetails);

        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator

      }
    )

    
  }

  
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export interface IIndexable<T = any> { [key: string]: T }

