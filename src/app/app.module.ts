import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
import {Geolocation} from "@ionic-native/geolocation";

import { AwsConfig } from './app.config';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConfirmPage } from '../pages/confirm/confirm';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksCreatePage } from '../pages/tasks-create/tasks-create';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalpagePage } from "../pages/modalpage/modalpage";

import { User } from '../providers/user';
import { Cognito } from '../providers/aws.cognito';
import { DynamoDB } from '../providers/aws.dynamodb';
import { MapPage } from "../pages/map/map";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FeuerwehrPage} from '../pages/Feuerwehr/Feuerwehr';
import {PolizeiPage} from '../pages/Polizei/Polizei';
import {RettungsdienstPage} from '../pages/Rettungsdienst/Rettungsdienst';
import {THWPage} from '../pages/THW/THW';
import {SzenarioPage} from '../pages/modalSzenario/Szenario';
import {ContactPage} from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmPage,
    SettingsPage,
    AboutPage,
    AccountPage,
    TabsPage,
    TasksPage,
    TasksCreatePage,
    MapPage,
    ModalpagePage,
    PolizeiPage,
    RettungsdienstPage,
    THWPage,
    FeuerwehrPage,
    SzenarioPage,
    ContactPage
    
  ],
  imports: [
    BrowserModule,
   
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, new AwsConfig().load())
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmPage,
    SettingsPage,
    AboutPage,
    AccountPage,
    TabsPage,
    TasksPage,
    TasksCreatePage,
    MapPage,
    ModalpagePage,
    PolizeiPage,
    RettungsdienstPage,
    THWPage,
    FeuerwehrPage,
    SzenarioPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    User,
    Cognito,
    DynamoDB
  ]
})
export class AppModule {}
