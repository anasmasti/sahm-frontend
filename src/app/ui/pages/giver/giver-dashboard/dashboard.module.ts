import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { ActionsComponent } from './dashboard/actions/actions.component';
import { InfoComponent } from './dashboard/info/info.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { DetailsBenefiComponent } from './dashboard/details-benefi/details-benefi.component';
@NgModule({
  declarations: [
    DashboardComponent,
    AlertComponent,
    ActionsComponent,
    InfoComponent,
    DetailsComponent,
    DetailsBenefiComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ]
})
export class DashboardModule { }
