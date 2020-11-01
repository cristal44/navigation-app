import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'flight', component: FlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
