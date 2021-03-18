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
}
