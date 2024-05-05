import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
/*
import { RegisterComponent } from './pages/register/register.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTokenInterceptor} from './services/interceptor/http-token.interceptor';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from 'angular-code-input'; */

@NgModule({
  declarations: [
    AppComponent,
    loginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

    ],
  providers: [
    HttpClient,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
