import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SpidersComponent } from './spiders/spiders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { provideHttpClient } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { DataComponent } from './data/data.component';
import { environments } from '../environments/environments';
import { OrderComponent } from './order/order.component';
import { SuccessComponent } from './success/success.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUPComponent,
    SpidersComponent,
    NavbarComponent,
    SignInComponent,
    VerifyemailComponent,
    UsersComponent,
    ProfileComponent,
    DataComponent,
    OrderComponent,
    SuccessComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
