import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModelRoutingModule } from './global-model-routing.module';
import { GlobalModelComponent } from '../global-model.component';


@NgModule({
  declarations: [
    GlobalModelComponent
  ],
  imports: [
    CommonModule,
    GlobalModelRoutingModule
  ],
  exports:[GlobalModelComponent]
})
export class GlobalModelModule { }
