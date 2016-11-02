import { NgModule } from '@angular/core';
import {  GridModule } from '@progress/kendo-angular-grid';



import {RentalRateGridComponent} from './rental-rate-grid.component';

import { RentalRateService } from './rental-rate.service';

@NgModule({
  imports: [
    GridModule
  ],
  declarations: [
    RentalRateGridComponent
  ],
  providers: [
    RentalRateService
  ]
})
export class RentalRateModule {}