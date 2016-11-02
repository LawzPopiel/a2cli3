import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from  '@angular/core/index';

import {RentalRateGridComponent} from './rental-rates/rental-rate-grid.component';
import { StylesComponent } from './styles/styles.component' ;
import {CostComponent } from './cost/cost.component';
import {RentalRatesComponent } from './rental-rates/rental-rates.component';
import {NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './overview/overview.component';
import { BootsComponent } from  './boots/boots.component';
import { ColorsComponent } from './colors/colors.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
{path: '', redirectTo: 'styles', pathMatch: 'full'},  
{
  path: 'styles', 
  component: StylesComponent,
  children: [
    {
      path: 'overview',
      component: OverviewComponent
    },
    {
      path: 'boots',
      component: BootsComponent     
    },
    {
      path: 'colors',
      component: ColorsComponent     
    }, 
    {
      path: 'data',
      component: DataComponent     
    },  
    {
      path: '',
      component: OverviewComponent
    }  
  ]
},
{path: 'cost', component: CostComponent},
{path: 'navigation', component: NavigationComponent},
{path: 'rates', component: RentalRateGridComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
