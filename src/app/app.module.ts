import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from '../app/components/registeration/registration.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserVerificationComponent } from './components/user-verification/user-verification.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { SideNavTogglerComponent } from './components/side-nav-toggler/side-nav-toggler.component';
import { HomeModule } from './components/home.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserVerificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    HomeModule
  ],
  providers: [HttpClient,
  {
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin: false,
      providers:[
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            "299756902932-t3o1ndbaf60bk84v9bi4ikndsu3g5tj8.apps.googleusercontent.com"
          )
        },
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
