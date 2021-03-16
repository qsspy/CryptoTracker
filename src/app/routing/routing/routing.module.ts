import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyDetailsComponent } from 'src/app/components/currency-details/currency-details.component';
import { CurrencyTableComponent } from 'src/app/components/currency-table/currency-table.component';

const routes: Routes = [
  {path: 'currency-table', component: CurrencyTableComponent},
  {path: 'currency-details', component: CurrencyDetailsComponent },
  {path: '**', redirectTo: '/currency-table', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class RoutingModule { }