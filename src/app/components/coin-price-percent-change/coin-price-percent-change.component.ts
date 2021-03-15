import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-coin-price-percent-change',
  templateUrl: './coin-price-percent-change.component.html',
  styleUrls: ['./coin-price-percent-change.component.css']
})
export class CoinPricePercentChangeComponent implements OnInit {

  @Input() percentValue: number = 1.123

  constructor() { }

  ngOnInit(): void {
    
  }

}
