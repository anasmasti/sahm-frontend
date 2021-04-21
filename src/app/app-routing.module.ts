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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
