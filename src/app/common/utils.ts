import { DatePipe } from "@angular/common";

export class Utils {

    static dateToRFC(date: Date, resetTimeToZero: boolean) {

        let rfcDate = ""
        if(resetTimeToZero) {
            rfcDate = new DatePipe('en-US').transform(date,'yyyy-MM-ddT') + '00:00:00.00Z'
        } else {
            rfcDate = new DatePipe('en-US').transform(date,'yyyy-MM-ddThh:mm:ss.SS') + 'Z'
        }

        return rfcDate
        //2021-03-10T01:00:00.00Z
    }

    static delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    static reverseString(str: string) {
        
        let reversedString = ''
        for(let i=str.length-1;i>=0;i--) {
            reversedString += str[i]
        }
        return reversedString
    }

    static getCurrencyString(str: string, currencySymbol?: string) {
        
        const decimalPart = str.split('.')[1]
        console.log(decimalPart)

        const inversed = this.reverseString(str.split('.')[0])
        const splitted = inversed.match(/.{1,3}/g)
        
        let merged = ''
        if(splitted) {
            
            for(let i = 0;i<splitted.length;i++) {
                merged +=splitted[i]
                if(i != splitted.length -1) {
                    merged+=','
                }
            }
        }

        merged = this.reverseString(merged)

        if(decimalPart) {
            merged += '.' + decimalPart.substring(0,2)
        }

        if(currencySymbol) {
            merged += currencySymbol
        }

        return merged
    }

    static getShortenedMoneyValue(value: number, currencySymbol?:string):string {
        
        let valueString = value.toString()
        const hasDecimalPart = valueString.includes('.')
        const decimalFreeString = valueString.split('.')[0]
        const decimalPart = valueString.split('.')[1]
        let postfix = ''

        if(decimalFreeString.length > 12) postfix = 'T'
        else if(decimalFreeString.length > 9) postfix = 'B'
        else if(decimalFreeString.length > 6) postfix = 'M'
        else if(decimalFreeString.length > 3) postfix = 'K'
        else {
            
            if(hasDecimalPart) {
                valueString = decimalFreeString + '.' + decimalPart.substring(0,2)
            }

            if(currencySymbol) {
                return currencySymbol + valueString
            }

            return valueString
        }

        const comaPosition = (decimalFreeString.length - 1)%3 + 1

        let outString = ''
        if(currencySymbol) {
            outString += currencySymbol
        }

        for(let i=0;i<comaPosition;i++) {
            outString+=decimalFreeString[i]
        }
        
        outString+=','
        outString+=decimalFreeString[comaPosition]
        outString+=decimalFreeString[comaPosition + 1]

        return outString + postfix

    }
}
