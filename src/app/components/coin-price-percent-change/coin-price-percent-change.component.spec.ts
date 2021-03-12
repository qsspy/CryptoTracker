import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPricePercentChangeComponent } from './coin-price-percent-change.component';

describe('CoinPricePercentChangeComponent', () => {
  let component: CoinPricePercentChangeComponent;
  let fixture: ComponentFixture<CoinPricePercentChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinPricePercentChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPricePercentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
