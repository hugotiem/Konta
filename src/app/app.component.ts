import { Component, Renderer2 } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

// NATIVE-IONIC
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public items = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afDB: AngularFireDatabase,
    private renderer: Renderer2
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.firebaseNotifications(); 
      this.isDarkModeActivated();
    });
  }

  async isDarkModeActivated(){
    await NativeStorage.getItem('dark-mode').then(
      data => {
        if(data.darkMode){
          this.renderer.setAttribute(document.body, 'color-theme', 'dark');
          this.statusBar.backgroundColorByHexString('#ffffff');
        }
        else {
          this.statusBar.backgroundColorByHexString('#000000');
        }
      },
      error => console.log(error)
    );
  } 

  firebaseNotifications() {

  }
}
