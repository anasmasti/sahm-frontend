import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './ui/pages/home/landing/landing.component';
import { AboutComponent } from './ui/pages/about/about/about.component';
import { ContactComponent } from './ui/pages/contact/contact/contact.component';
import { LoginComponent } from './ui/pages/admin/login/login/login.component';
import { SignupComponent } from './ui/pages/admin/signup/signup/signup.component';
import { StatistiqueComponent } from './ui/pages/admin/dashboard/statistique/statistique.component';
import { InfoComponent } from './ui/pages/admin/dashboard/info/info.component';
import { ListComponent } from './ui/pages/admin/dashboard/list/list.component';
import { DetailComponent } from './ui/pages/admin/dashboard/detail/detail.component';
import { ActionComponent } from './ui/pages/beneficiary/dashboard/action/action.component';
import { AlertComponent } from './ui/pages/giver/dashboard/alert/alert.component';
import { NavbarComponent } from './ui/shared/layouts/navbar/navbar.component';
import { FooterComponent } from './ui/shared/layouts/footer/footer.component';
import { GlobalModelComponent } from './ui/shared/global-model/global-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    StatistiqueComponent,
    InfoComponent,
    ListComponent,
    DetailComponent,
    ActionComponent,
    AlertComponent,
    NavbarComponent,
    FooterComponent,
    GlobalModelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
