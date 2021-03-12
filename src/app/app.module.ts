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

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent,
    CoinNameComponent,
    CoinPricePercentChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CurrencyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
