import { CurrencyIntervalHistory } from "./currency-interval-history"

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    DEAD = "dead"

}

export class CurrencyDetails {

    id: string = ""
   // currency: string = ""
    symbol: string = ""
    name: string = ""
    logo_url: string = ""
    status: string = ""
    price: number = 0
    price_date: Date = new Date()
  //  price_timestamp: Date = new Date()
  //  circulating_supply: number = 0
   // max_supply: number = 0
  //  market_cap: number = 0
  //  num_exchanges: number = 0
   // num_pairs: number = 0
  //  num_pairs_unmapped: number = 0
   // first_candle: Date = new Date()
   // first_trade: Date = new Date()
   // first_order_book: Date = new Date()
    rank: number = 0
    rank_delta: number = 0
    //high: number = 0
    //high_timestamp: Date = new Date()

    '1d': CurrencyIntervalHistory = new CurrencyIntervalHistory()
    '7d': CurrencyIntervalHistory = new CurrencyIntervalHistory()
    '30d': CurrencyIntervalHistory = new CurrencyIntervalHistory()
    '365d': CurrencyIntervalHistory = new CurrencyIntervalHistory()

    get day_change_percent(): number {
        return this['1d'].market_cap_change_pct
    }

    get week_change_percent(): number {
        return this['7d'].market_cap_change_pct
    }

    get month_change_percent(): number {
        return this['30d'].market_cap_change_pct
    }

    get year_change_percent(): number {
        return this['365d'].market_cap_change_pct
    }

    constructor(responseBody?: any) {
        this.id = responseBody?.id
        this.symbol =responseBody?.symbol
        this.name = responseBody?.name
        this.logo_url = responseBody?.logo_url
        this.status = responseBody?.status
        this.price = responseBody?.price

        this.rank = responseBody?.rank
        this.rank_delta = responseBody?.rank_delta

        if(responseBody) {
            this['1d'] = responseBody['1d']
            this['7d'] = responseBody['7d']
            this['30d'] = responseBody['30d']
            this['365d'] = responseBody['365d']
        }
    }
}
