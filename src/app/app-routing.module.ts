import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './admin.guard';
import { CartComponent } from './cart/cart.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserGuard } from './user.guard';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminHome",component:AdminHomeComponent, canActivate:[AdminGuard]},
  {path:"cart",component:CartComponent,canActivate:[UserGuard]},
  {path:"userReg",component:UserRegComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"userHome",component:UserHomeComponent,canActivate:[UserGuard]},
  {path:"viewUser", component:ViewUsersComponent},
  {path:"viewProd", component:ViewProductsComponent},
  {path:"adminChngPwd", component:ChangePwdComponent},
  {path:"paymentGateway", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
