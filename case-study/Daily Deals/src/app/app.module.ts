import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { CouponsComponent } from './coupons/coupons.component';
import { AdminComponent } from './admin/admin.component';
import{HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GooglePayButtonModule } from '@google-pay/button-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    HeaderComponent,
    CouponsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '582059736857-hg195057ua7k7pvimltc4a7bbpek3isi.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
