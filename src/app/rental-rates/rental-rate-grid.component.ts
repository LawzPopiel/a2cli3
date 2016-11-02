import { Component, OnInit, AfterContentInit }  from '@angular/core';

import {
  GridDataResult,
  SortDescriptor,
  orderBy
} from '@progress/kendo-angular-grid';

import { IRate } from './rental-rate';
import { RentalRateService } from './rental-rate.service';

@Component({
    selector: 'rates',
    templateUrl: './rental-rate-grid.component.html',
    styleUrls: ['./rental-rate-grid.component.css']
})
export class RentalRateGridComponent implements OnInit {
    
    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult = null;

    pageTitle: string = 'Rental Rates';
    errorMessage: string;

    rentalRates: IRate[];



    constructor(private _rentalRateService: RentalRateService) {

    }



    ngOnInit(): void {
           this._rentalRateService.getRentalRates()
                     .subscribe(
                       rentalRates => this.rentalRates = rentalRates,
                       error =>  this.errorMessage = <any>error);  

                          

    }


    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadRates();
    }  

    private loadRates(): void {
        this.gridView = {
            data: orderBy(this.rentalRates, this.sort),
            total: this.rentalRates.length
        };
    }

}