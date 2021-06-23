import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardActionComponent } from './dashboard-action.component';


const routes: Routes = [
  {
    path:'',component:DashboardActionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardActionRoutingModule { }
