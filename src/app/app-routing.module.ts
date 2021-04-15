import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",loadChildren:()=>import("./ui/pages/home/home.module")
  .then(mod=>mod.HomeModule)
},
{path:"about",loadChildren:()=> import("./ui/pages/about/about.module")
.then(mod=>mod.AboutModule)},

{path:"contact", loadChildren :() => import("./ui/pages/contact/contact.module")
.then(mod=>mod.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
