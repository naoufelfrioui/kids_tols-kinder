import { Component, ViewChild } from '@angular/core';
import { Config, Platform, MenuController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { User } from '../providers/user';
import { SettingsPage } from "../pages/settings/settings";
import { MapPage } from "../pages/map/map";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('nav') nav: Nav

    rootPage:any = null;
    settingsPage = SettingsPage;
    mappage = MapPage ;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, user: User, public config: Config,
   private menuCtr :MenuController) {
    let globalActions = function() {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    };

    platform.ready().then(() => {
      user.isAuthenticated().then(() => {
        console.log('you are authenticated!');
        this.rootPage = TabsPage;
        globalActions();
      }).catch(() => {
        console.log('you are not authenticated..'); 
        this.rootPage = LoginPage;
        globalActions();
      });
    });
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtr.open();

  }
}
