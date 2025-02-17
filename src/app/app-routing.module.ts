import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpidersComponent } from './spiders/spiders.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { UsersComponent } from './users/users.component';
import { adminGuard } from './admin.guard';

import { ProfileComponent } from './profile/profile.component';
import { loggedUserGuard } from './logged-user.guard';
import { DataComponent } from './data/data.component';
import { OrderComponent } from './order/order.component';
import { SuccessComponent } from './success/success.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"order", component:OrderComponent},
  {path:"shop", component:ShopComponent},
  {path:"success", component:SuccessComponent},
  {path:"signup", component:SignUPComponent},
  {path:"signin", component:SignInComponent},
  {path:"verifymail", component:VerifyemailComponent},
  // {path:"users", component:UsersComponent, canActivate:[adminGuard]},
  {path:"users", component:UsersComponent},
  {path:"data", component:DataComponent},
  {path:"profile", component:ProfileComponent, canActivate:[loggedUserGuard]},
  {path:"", redirectTo:"signin", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
