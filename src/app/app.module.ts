import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import {  ButtonsModule } from '@progress/kendo-angular-buttons';
import {  GridModule } from '@progress/kendo-angular-grid';
import {  SortableModule } from '@progress/kendo-angular-sortable';
import {  LayoutModule } from '@progress/kendo-angular-layout';
import {  DialogModule } from '@progress/kendo-angular-dialog';
import {  DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {  ChartsModule } from '@progress/kendo-angular-charts';

/* Feature Modules */
import { RentalRateModule } from './rental-rates/rental-rate.module';
import { CostModule} from './cost/cost.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StylesComponent } from './styles/styles.component';



import { RentalRatesComponent } from './rental-rates/rental-rates.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './overview/overview.component';
import { BootsComponent } from './boots/boots.component';
import { ColorsComponent } from './colors/colors.component';
import { DataComponent } from './data/data.component';
import { TestComponent } from './test/test.component';


/* Feature Modules */


@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    RentalRatesComponent,
    NavigationComponent,
    OverviewComponent,
    BootsComponent,
    ColorsComponent,
    DataComponent,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, ButtonsModule, GridModule, SortableModule, LayoutModule, DialogModule, DropDownsModule,ChartsModule,
    RentalRateModule, CostModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
