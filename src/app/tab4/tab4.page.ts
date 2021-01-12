import { Component, OnInit, Renderer2 } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NativeStorage } from '@ionic-native/native-storage/';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public checked: boolean = false;
  public opened: any;


  constructor(
    private renderer: Renderer2,
    private statusBar: StatusBar,
    private afDB: AngularFireDatabase,
  ) { 
    if(document.body.getAttribute('color-theme') == 'dark'){
      this.checked = true;
    }
    this.getOpenValue();
  }

  ngOnInit() {}

  async toggleColorTheme(ev: any) {

    // VARIABLES LOCALES
    let color: string = 'light';
    let darkMode: boolean = false;
    let statusBarColor: string = '#000000';

    if(ev.detail.checked){ // SI CHECKED
      color = 'dark';
      darkMode = true;
      statusBarColor = '#ffffff';
    }

    // CHANGE COLOR THEME + SET BOOL DARKMODE IN STORAGE
    this.renderer.setAttribute(document.body, 'color-theme', color);
    await NativeStorage.setItem('dark-mode', {
      darkMode: darkMode
    }).then(
      () => {
        console.log('Stored item');
        this.statusBar.backgroundColorByHexString(statusBarColor);
      },
      error => console.error('Error storing item', error)        
    );
  }

  async toggleOpenStore(ev: any){
    this.updateOpenValue(ev.detail.checked);
  }

  getOpenValue(){
    this.afDB.object('open').valueChanges().subscribe(bool => {
      this.opened = bool;
    });
  }

  updateOpenValue(bool: boolean){
    this.afDB.object('open').set(bool);
  }

  setHour(row: any){
    const value = row.value.split('T')[1].substr(0, 5);
    this.afDB.object('horaires/' + row.name + "/").set(value);
  }

}
