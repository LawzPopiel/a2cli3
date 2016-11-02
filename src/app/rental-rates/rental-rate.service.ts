import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IRate } from './rental-rate'

@Injectable() 
export class RentalRateService {

    private _rentalRateUrl = 'api/rental-rates/rental-rates.json';

    constructor(private _http: Http) {}

    getRentalRates(): Observable<IRate[]>  {
        return this._http.get(this._rentalRateUrl)
            .map((response: Response) => <IRate[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);        
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}