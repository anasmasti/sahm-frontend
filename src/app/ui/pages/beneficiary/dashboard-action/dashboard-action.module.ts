import { DashboardActionComponent } from './dashboard-action.component';
// import { GlobalModalComponent } from './../global-modal/global-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

import { DashboardActionRoutingModule } from './dashboard-action-routing.module';


@NgModule({
  declarations: [
    // DashboardActionComponent
  ],
  imports: [
    CommonModule,
    DashboardActionRoutingModule,
    // GmModuleModule
  ]
})
export class DashboardActionModule { }
