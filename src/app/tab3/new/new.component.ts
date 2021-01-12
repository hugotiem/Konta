import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

import { ItemsComponent } from './items/items.component';
import { NamesComponent } from './names/names.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { OptionsLivraisonComponent } from './options-livraison/options-livraison.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  //private afDB: AngularFireDatabase;

  @Input() title: string;
  @Input() key: any;
  @Input() price: number;
  @Input() km: number;
  @Input() date: any;
  @Input() clientName: string;
  @Input() delivery: any;
  @Input() type: string;

  private produits: any = [];
  private formules: any = [];
  private extras: any = [];

  private tmp: any = [];

  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController, private afDB: AngularFireDatabase) { 
    if(this.date == undefined){
      this.date = new Date().toISOString();
    }

    if(this.type == undefined) {
      this.type = 'lone';
    }

    this.getProduitsFromFirebase();
    this.getFormulesFromFirebase();
    this.getExtrasFromFirebase();
  }

  ngOnInit() {
    if(this.delivery == undefined){
      this.init();    
    } else {
      for(let admin of Object.keys(this.delivery)){
        for(let item of Object.keys(this.delivery[admin].items)){
          if(this.delivery[admin].items[item].formuleContent != undefined){
            for(let p of Object.keys(this.delivery[admin].items[item].formuleContent)){
              this.tmp.push({
                key: this.delivery[admin].items[item].formuleContent[p].key,
                quantite: this.delivery[admin].items[item].formuleContent[p].quantite,
              })
            } 
          } else if(this.delivery[admin].items[item].key != undefined) {
            this.tmp.push({
              key: this.delivery[admin].items[item].key,
              quantite: this.delivery[admin].items[item].quantite,
            })
          }
        }
      }
    }
  }

  init(){
    this.delivery = [];
    this.addAdmin();
    this.price = 0;
  }

  // ADDS 

  addAdmin(){
    this.delivery.push({
        name: '',
        items: [],
        firstPrice: 0,
        delivery: true,
    })
    this.addItems(this.delivery[this.delivery.length - 1].items);
  }

  addItems(items: any){
    items.push({
      key: '',
      title: '',
      quantite: 1,
      price: 0,
      firstPrice: 0,
      formuleContent: [],
      max : -1
    })
  }

  close(){
    this.modalCtrl.dismiss();
  }

  add(item: any, admin: any) {
    if(item.max != -1){
      if(item.quantite < item.max){
        item.quantite ++;
        this.updatePrices(item, 1, true);
        this.updatesFirstPrices(admin, 1, item, true);
      }  
    } else {
      item.quantite ++;
    }
  }

  remove(item: any, admin: any) {
    if(item.quantite > 1){
      item.quantite --;
      this.updatePrices(item, 1, false);
      this.updatesFirstPrices(admin, 1, item, false);
    }
  }

  updatePrices(item: any, quantite: number, add: boolean){
    if(add){
      this.price = this.price + item.price;
    } else {
      this.price = this.price - (item.price * quantite);
    }
  }

  updatesFirstPrices(admin: any, quantite: number, item: any, add: boolean){
    if(add){
      admin.firstPrice = admin.firstPrice + item.firstPrice;
    } else {
      admin.firstPrice = admin.firstPrice - (item.firstPrice * quantite);
    }
  }

  delete(item: any, i: number, j: number){
    let d = this.delivery[i];   
    this.price = this.price - (item.price * item.quantite);
    d.firstPrice = d.firstPrice - (d.items[j].firstPrice * d.quantite);
    d.items.splice(j, 1);
  }

  deleteAll(admin: any, i: number){
    for(let item of Object.keys(admin.items)){
      this.price = this.price - (admin.items[item].price * admin.items[item].quantite);
      admin.firstPrice = admin.firstPrice - (admin.items[item].firstPrice * admin.items[item].quantite);
    }
    this.delivery.splice(i, 1);
  }

  // MODALS

  async itemsModal(admin: any, item: any){
    const modal = await this.modalCtrl.create({
      component: ItemsComponent,
      componentProps: {
        afDB: this.afDB
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()
    });

    modal.onDidDismiss().then((data: any) => {
      if(data.data !== undefined){

        if(item.title != ''){
          this.updatePrices(item, item.quantite, false);
          this.updatesFirstPrices(admin, item.quantite, item, false);
        }

        item.title = data.data.item.title;
        item.max = data.data.item.quantite;
        item.price = data.data.item.price;
        item.firstPrice = data.data.item.firstPrice;
        item.quantite = 1;

        if(data.data.item.formuleContent != undefined){
          item.formuleContent = data.data.item.formuleContent;
          for(let i of Object.keys(item.formuleContent)){
            for(let p of Object.keys(this.produits)){
              if(item.formuleContent[i].key == this.produits[p].key){
                item.max = this.produits[p].content.stock/item.formuleContent[i].quantite;
              }
            }
            for(let e of Object.keys(this.extras)){
              if(item.formuleContent[i].key == this.extras[e].key){
                if(this.extras[e].content.stock/item.formuleContent[i].quantite < item.max){
                  item.max = this.extras[e].content.stock/item.formuleContent[i].quantite;
                }
              }
            }
          }
        } else {
          item.max = data.data.item.quantite;
        }

        item.key = data.data.item.key;

        this.updatePrices(item, 1, true);
        this.updatesFirstPrices(admin, 1, item, true);
      }
    })
    return await modal.present();
  }

  activated(){
    document.querySelector('#date-item').classList.toggle('no-input-feet');
  }

  // POPOVERS

  async namesPopover(ev: any, i) {
    document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
    const popover = await this.popoverCtrl.create({
      component: NamesComponent,
      cssClass: 'sort-popover',
      event: ev,
      mode: "md",
      translucent: true,

    });

    popover.onDidDismiss().then((data: any) => {
      if(data.data !== undefined){
        this.delivery[i].name = data.data.fromPopover;
      }
      document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
    })
    return await popover.present();
  }

  async openOptionPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: OptionsLivraisonComponent,
      event: ev,
      mode: "md",
      translucent: true
    })

    popover.onWillDismiss().then((data: any) => {
      if(this.type != data.data.type){
        this.init();
      }
      this.type = data.data.type; 
    })

    return await popover.present();
  }

  //BDD

  setQuantite(item: any, signe: number){
    for(let p of Object.keys(this.produits)){
      if(this.produits[p].key == item.key){
        this.produits[p].content.stock = this.produits[p].content.stock + (signe * item.val);
        this.afDB.object('produits/'+item.key+'/stock').set(this.produits[p].content.stock);
      }
    }
    for(let e of Object.keys(this.extras)){
      if(this.extras[e].key == item.key){
        this.extras[e].content.stock = this.extras[e].content.stock + (signe * item.val);
        this.afDB.object('extras/'+item.key+'/stock').set(this.extras[e].content.stock);
      }
    }
    
  }

  save() {

    if(this.key != undefined){
      for(let t of Object.keys(this.tmp)){
        this.setQuantite(this.tmp[t], 1);
      }
      this.modifyItemInFirebase();
    } else {
      this.addItemToFirebase();
    }
    
    for(let admin of Object.keys(this.delivery)){
      for(let item of Object.keys(this.delivery[admin].items)){
        if(this.delivery[admin].items[item].formuleContent != undefined){
          for(let p of Object.keys(this.delivery[admin].items[item].formuleContent)){
            this.setQuantite(this.delivery[admin].items[item].formuleContent[p], -1);
          }
        } else if(this.delivery[admin].items[item].key != '') {
          this.setQuantite(this.delivery[admin].items[item], -1);
        }
      }
    } 
    this.close();
  }

  addItemToFirebase(){
    this.afDB.list('Livraisons/').push({
      title: this.title,
      order: this.delivery,
      price: this.price,
      distance: this.km,
      date: this.date,
      clientName: this.clientName,
      type: this.type,
    });
  }

  modifyItemInFirebase(){
    this.afDB.object('Livraisons/' + this.key + '/title/')      .set(this.title)
    this.afDB.object('Livraisons/' + this.key + '/order/')      .set(this.delivery);
    this.afDB.object('Livraisons/' + this.key + '/price/')      .set(this.price);
    this.afDB.object('Livraisons/' + this.key + '/distance/')   .set(this.km);
    this.afDB.object('Livraisons/' + this.key + '/clientName/') .set(this.clientName);
    this.afDB.object('Livraisons/' + this.key + '/date/')       .set(this.date);
    this.afDB.object('Livraisons/' + this.key + '/type/')       .set(this.type);
  }

  getProduitsFromFirebase(){
    this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.produits = [];
      actions.forEach(action => {
        this.produits.push({
          key: action.key,
          content: action.payload.exportVal()
        })
      })
    })
  }

  getFormulesFromFirebase(){
    this.afDB.list('formules/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.formules = [];
      actions.forEach(action => {
        this.produits.push({
          key: action.key,
          content: action.payload.exportVal()
        })
      })
    })
  }

  getExtrasFromFirebase(){
    this.afDB.list('extras/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.extras = [];
      actions.forEach(action => {
        this.produits.push({
          key: action.key,
          content: action.payload.exportVal()
        })
      })
    })
  }

}
