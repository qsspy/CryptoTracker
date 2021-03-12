export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    DEAD = "dead"

}

export class CurrencyDetails {

 id : string = ""
 currency : string = ""
 symbol :  string = ""   
 name :  string = ""   
 logo_url :  string = "" 
 status :  string = ""   
 price :  number = 0   
 price_date : Date = new Date()   
 price_timestamp : Date = new Date()   
 circulating_supply :  number = 0     
 max_supply :  number = 0      
 market_cap :  number = 0    
 num_exchanges :  number = 0      
 num_pairs :  number = 0      
 num_pairs_unmapped :  number = 0     
 first_candle :  Date = new Date()   
 first_trade :  Date = new Date()    
 first_order_book :  Date = new Date()    
 rank : number = 0
 rank_delta : number = 0
 high : number = 0 
 high_timestamp :  Date = new Date()
}
