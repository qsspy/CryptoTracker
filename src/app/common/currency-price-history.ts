export class CurrencyPriceHistory {

    currency: string = ""
    timestamps: Date[] = []
    prices: number[] = []

    constructor(response?: any) {
        Object.assign(this, response)
    }
}
