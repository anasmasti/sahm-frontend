import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

console.warn("about loaded")
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
