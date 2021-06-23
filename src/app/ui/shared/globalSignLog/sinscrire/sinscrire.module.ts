import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinscrireRoutingModule } from './sinscrire-routing.module';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SinscrireComponent
  ],
  imports: [
    CommonModule,
    SinscrireRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SinscrireModule { }
