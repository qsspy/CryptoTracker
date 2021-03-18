import { TestBed } from '@angular/core/testing';

import { CurrencyChartService } from './currency-chart.service';

describe('CurrencyChartService', () => {
  let service: CurrencyChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
