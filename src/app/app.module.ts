import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CurrencyDataService } from './services/currency-data.service';
import { CoinNameComponent } from './components/coin-name/coin-name.component';
import { CoinPricePercentChangeComponent } from './components/coin-price-percent-change/coin-price-percent-change.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { RoutingModule } from './routing/routing/routing.module';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { ShortCurrencyFormPipe } from './custom-pipes/short-currency-form-pipe';
import { CurrencyChartService } from './services/currency-chart.service';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent,
    CoinNameComponent,
    CoinPricePercentChangeComponent,
    NavHeaderComponent,
    CurrencyDetailsComponent,
    ShortCurrencyFormPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RoutingModule,
    FormsModule
  ],
  providers: [CurrencyDataService, CurrencyChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
