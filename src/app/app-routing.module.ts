import { SinscrireComponent } from './ui/shared/globalSignLog/sinscrire/sinscrire/sinscrire.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './ui/shared/chat/chat.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./ui/pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./ui/pages/about/about.module').then((mod) => mod.AboutModule),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('./ui/pages/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },

  {
    path: 'chat',
    component: ChatComponent
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./ui/shared/globalSignLog/sinscrire/sinscrire.module').then(
        (mod) => mod.SinscrireModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./ui/shared/globalSignLog/seconnecter/seconnecter.module').then(
      (mod)=>mod.SeconnecterModule
    ),

  },

  {
    path: 'signup-beneficiary',
    loadChildren: () =>
    import('./ui/pages/beneficiary/signup/signup.module').then(
      (mod)=>mod.SignupModule
    ),

  },

  {
    path:'signup-giver',
    loadChildren:() =>
    import('./ui/pages/giver/signup/signup.module').then(
      (mod)=>mod.SignupModule
    )
  },
  {
    path:'dashboard-giver',
    loadChildren:() =>
    import('./ui/pages/giver/giver-dashboard/dashboard.module').then(
      (mod)=>mod.DashboardModule
    )
  },

  {
    path:'dashboard-action',
    loadChildren:() =>
    import('./ui/pages/beneficiary/dashboard-action/dashboard-action.module').then(
      (mod)=>mod.DashboardActionModule
    )
  },

  {
    path:'global-modal',
    loadChildren:() =>
    import('./ui/shared/global-model/global-model/global-model.module').then(
      (mod)=>mod.GlobalModelModule
    )
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
