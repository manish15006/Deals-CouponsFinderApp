import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CouponsComponent } from './coupons/coupons.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {
    path:"coupons",
    component:CouponsComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"",
    redirectTo:"header",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
