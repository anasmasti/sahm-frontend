import { GlobalModelModule } from './ui/shared/global-model/global-model/global-model.module';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
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
import { AlertComponent } from './ui/pages/giver/dashboard/alert/alert.component';
import { NavbarComponent } from './ui/shared/layouts/navbar/navbar.component';
import { FooterComponent } from './ui/shared/layouts/footer/footer.component';
import { GlobalModelComponent } from './ui/shared/global-model/global-model.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './ui/shared/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ui/state/counter.reducer';
import { SeconnecterComponent } from './ui/shared/globalSignLog/seconnecter/seconnecter/seconnecter.component';
import { DashboardActionComponent } from './ui/pages/beneficiary/dashboard-action/dashboard-action.component';
import { ActionsComponent } from './ui/pages/beneficiary/dashboard-action/actions/actions.component';
import { InfoUserComponent } from './ui/pages/beneficiary/dashboard-action/info-user/info-user.component';
import { DetailActionComponent } from './ui/pages/beneficiary/dashboard-action/detail-action/detail-action.component';                                                                                                                          

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';





const material = [MatDialogModule , MatButtonModule];

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
    AlertComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    SeconnecterComponent,
    DashboardActionComponent,
    ActionsComponent,
    InfoUserComponent,
    DetailActionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    GlobalModelModule,
    
    StoreModule.forRoot({counter: counterReducer}),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
