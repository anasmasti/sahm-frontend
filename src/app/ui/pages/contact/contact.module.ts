import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
