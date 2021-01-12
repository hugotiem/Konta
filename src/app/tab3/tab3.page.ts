import { Component } from '@angular/core';

// IONIC COMPONENTS
import { IonRouterOutlet, IonSlides, PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

// ANGULAR COMPONENTS
import { AngularFireDatabase } from '@angular/fire/database';
import { NavigationExtras } from '@angular/router';

// MY COMPONENTS
import { AppComponent } from '../app.component';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pageName: boolean = true;

  private date: any = new Date().toISOString();
  items: any = [];
  sharing: any = [];

  total: number = 0;
  private charges: number = 0;
  benef: number = 0;

  admin: any = [
    { name: 'Hugo', tab: {total: 0, rapport: 0} },
    { name: 'Alexis', tab: {total: 0, rapport: 0} },
    { name: 'Taheir', tab: {total: 0, rapport: 0} },
    { name: 'Marvyn', tab: {total: 0, rapport: 0} },
    { name: 'Gud', tab: {total: 0, rapport: 0} }

  ]

  selectedSlide: any;
  segment = 0;
  slidesOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor(
    private modalController: ModalController,
    private app: AppComponent, 
    private afDB: AngularFireDatabase, 
    private alertCtrl: AlertController, 
    private navCtrl: NavController,
    private routerOutlet: IonRouterOutlet,
  ) {
    this.afDB = this.app.afDB;
    this.getStonksInFirebase();
    this.getSharingFromFirebase();
  }

  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment);
    if(this.segment == 0){
      this.pageName = false;
    }
    else{
      this.pageName = true;
    }
  }

  async slideChanged(slides: IonSlides){
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
      if(this.segment == 0){
        this.pageName = false;
      }
      else if (this.segment == 1){
        this.pageName = true;
      }
    })
    
  }

  showBenef(): void {
    document.querySelector('#benef').classList.toggle('open')
  }

  async addNewExpModal() {
    const modal = await this.modalController.create({
      component: NewComponent,
      componentProps: {
        afDB: this.afDB,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      cssClass: 'my-custom-class'
    });
    return await modal.present();   
  }

  goTo(item: any){

    let navData: NavigationExtras = {
      queryParams: {
        item: item,
      }
    }
    this.navCtrl.navigateForward('/tabs/tab3/edit', navData);
  }

  goToOrder(){
    this.navCtrl.navigateForward('/tabs/tab3/order');
  }

  async confirmAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmer',
      message: 'Voulez-vous vraiment répartir le montant total avec tout le monde ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            for(let i of Object.keys(this.items)){
              this.afDB.object('Livraisons/' + this.items[i].key + '/sharing/').set(true);
              //this.afDB.object('Livraisons/' + this.items[i].key + '/old/').set(true);
            }
            this.afDB.list('sharing').push({
              date: new Date().toISOString(),
              last: this.items[this.items.length - 1]
            })
          }
        }
      ]
    })
    await alert.present();
  }

  getFuelPrice(km: number): number {
    let price: number = 2;
    if(km > 15) {
      price = price + (((km-15)*1)/7);
    } 
    else if (km == 0){
      price = 0;
    }
    return price;
  }

  getPourcent(val: number, den: number) : number {
    if(den == 0) {
      den = 1;
    }
    return ((val/den) * 100);
  }

  getStonksInFirebase() {
    this.afDB.list('Livraisons/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {

      // INITIALISATIONS 
      this.items = [];
      this.total = 0;
      this.charges = 0;

      for(let a of Object.keys(this.admin)){
        this.admin[a].tab.rapport = 0;
        this.admin[a].tab.total = 0;
      }

      // PARCOURT BDD FIREBASE
      actions.forEach(action => {
        
        let item = action.payload.exportVal();

        if(item.sharing == undefined){

          this.total = this.total + (+item.price);

          for(let n of Object.keys(this.admin)){
            for(let d of Object.keys(item.order)){
              if(this.admin[n].name == item.order[d].name){
                // CALCUL SOMME RAPPORTE
                if(item.order[d] == item.order[0]){
                  this.admin[n].tab.rapport = this.admin[n].tab.rapport + (+item.price);
                }
                // CALCUL SOMME GAGNE
                let fuel = 0;
                if(this.admin[n].name == item.order[0].name){
                  fuel = this.getFuelPrice(+item.order[d].distance);
                }
                this.admin[n].tab.total = this.admin[n].tab.total + (+item.order[d].firstPrice) + fuel;
                // CALCUL DES CHARGES
                this.charges = this.charges + (+item.order[d].firstPrice) + fuel;
              }
            }
          }
        }
  
        if(item.old == undefined){      
          this.items.push({
            key: action.key,
            order: item.order,
            title: item.title,
            price: item.price,
            date: item.date,
            km: item.distance,
            clientName: item.clientName,
            type: item.type,
            sharing: item.sharing
          });
        }
      });

      // RAJOUTE LE BENEFICE AU TOTAL DE CHACUN
      for(let n of Object.keys(this.admin)){
        this.admin[n].tab.total = this.admin[n].tab.total + ((this.total - this.charges)/5);
      }
      this.benef = this.total - this.charges;
    });
  }

  getSharingFromFirebase(){
    this.afDB.list('sharings/').snapshotChanges(['child_added', 'child_changed', 'child_removed']).subscribe(actions => {
      this.sharing = [];
      actions.forEach(action => {
        this.sharing.push({
          date: action.payload.exportVal().date,  
          last: action.payload.exportVal().last
        })
      });
    });
  }
}
