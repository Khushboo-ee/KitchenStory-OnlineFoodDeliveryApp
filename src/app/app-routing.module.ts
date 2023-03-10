import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminHome",component:AdminHomeComponent},
  {path:"cart",component:CartComponent},
  {path:"userReg",component:UserRegComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"userHome",component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
