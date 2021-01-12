import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// OWN COMPONENTS
import { PopoverComponent } from './tab2/popover/popover.component';
import { AddComponent } from './tab2/add/add.component';

// FROM FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';


export const firebaseConfig = {
  apiKey: 'AIzaSyDobeRP6jeR7DcDAnFCqUiInCnKqYppYqg',
  authDomain: 'konta-95333.firebaseapp.com',
  databaseURL: 'https://konta-95333.firebaseio.com',
  projectId: 'konta-95333',
  storageBucket: 'konta-95333.appspot.com',
  messagingSenderId: '965037121908',
  appId: "1:965037121908:web:11bd109c9315dc4da8cc21",
};

@NgModule({
  declarations: [AppComponent, 
    PopoverComponent,
    AddComponent,
  ],

  entryComponents: [PopoverComponent, 
    AddComponent],

  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,

    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
