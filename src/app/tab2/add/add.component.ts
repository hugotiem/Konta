import { Component, OnInit, Input } from '@angular/core';
import { IonItemSliding, ModalController, PopoverController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

import { QuantiteComponent } from './quantite/quantite.component';
import { OptionsComponent } from './options/options.component';
import { ProduitsListComponent } from './produits-list/produits-list.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  // INFO ITEMS
  title: string;
  @Input() category: string;
  price: number;
  firstPrice: number;
  stock: number = 1;
  url: string;

  error: boolean = false;

  isAlreadySaved: boolean = false;

  formuleContent: any = [];
  @Input() item: any;

  index: number = 1;

  private last: boolean = false;

  constructor(
    private modalCtrl: ModalController, 
    private popoverCtrl: PopoverController,
    private afBD: AngularFireDatabase,
  ) {
    
  }

  ngOnInit() {
    if(this.item != undefined) {

      this.title = this.item.name;
      this.price = this.item.price;
      this.firstPrice = this.item.firstPrice;
      this.stock = this.item.stock;

      if(this.item.formuleContent != undefined){

        let tab = [];

        for(let form of Object.keys(this.item.formuleContent)){
          tab.push({
            firstPrice: this.item.formuleContent[form].firstPrice,
            key: this.item.formuleContent[form].key,
            max: this.item.formuleContent[form].max,
            quantite: this.item.formuleContent[form].quantite,
            title: this.item.formuleContent[form].title
          })
        }
        this.formuleContent = tab;
      }

      this.isAlreadySaved = true;
    }
    else {
      this.category = 'produits';
    }

    if(this.formuleContent.length == 0) {
      this.formuleContent = [{
        title: '',
        firstPrice: 0,
        quantite: 1,
        max: -1,
        key: '',
      }];
    }

  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  async openOptionsPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: OptionsComponent,
      event: event,
      mode: 'md',
    })

    popover.onWillDismiss().then((data: any) => {
      let type = data.data.type;
      if(type != undefined){
        this.category = type;
      }      
    });

    return await popover.present();
  }

  isFormuleEmpty(): boolean {
    if(this.formuleContent == undefined){
      return true;
    }
    else if(this.formuleContent.length == 0){
      return true;
    }
    return false;
  }

  async openProduitsList(ev: any, index: number) {
    const popover = await this.popoverCtrl.create({
      component: ProduitsListComponent,
      componentProps: {
        formule: this.formuleContent,
      },
      event: ev, 
      mode: 'md'
    })

    document.querySelector('#formule-' + index + '-item').classList.toggle('no-input-feet');

    popover.onWillDismiss().then((data: any) => {

      document.querySelector('#formule-' + index + '-item').classList.toggle('no-input-feet');

      if(data.data.formule != undefined){
        this.formuleContent[index].firstPrice = data.data.formuleFirstPrice;
        this.formuleContent[index].title = data.data.formule;
        this.formuleContent[index].max = data.data.quantite;
        this.formuleContent[index].key = data.data.key;

        let tmp: number = 0;

        // A MODIFIER

        for(let formule of Object.keys(this.formuleContent)){
          tmp = tmp + this.formuleContent[formule].firstPrice;
        }

        this.firstPrice = tmp;

      }      

      this.last = data.data.last;
    })

    if(!this.last){
      return await popover.present();
    }
  }

  addItems() {
    this.formuleContent.push({
      title: '',
      firstPrice: 0,
      quantite: 1,
      max: -1,
      key: '',
    });
  }

  async delete(i: number, slide: IonItemSliding){
    this.firstPrice = this.firstPrice - (this.formuleContent[i].firstPrice * this.formuleContent[i].quantite);
    this.formuleContent.splice(i, 1);
    await slide.close();
  }

  async openQuantityModal(id: string, item: any) {

    let quantite: number;

    if(this.category == 'formules'){
      quantite = item.quantite;
    } else {
      quantite = this.stock;
    }

    const modal = await this.modalCtrl.create({
      component: QuantiteComponent,
      componentProps: {
        quantite: quantite,
      },
      cssClass: 'quantite-class',
      swipeToClose: true,
      mode: 'ios',
    })

    document.querySelector('#'+id).classList.toggle('no-input-feet');

    modal.onWillDismiss().then((data: any) => {
      if(data.data !== undefined){
        if(item != undefined){
          if(item.quantite != undefined && item.quantite >= data.data.quantite){
            this.firstPrice = this.firstPrice - ((item.quantite - data.data.quantite) * item.firstPrice);
          }
          else {
            this.firstPrice = this.firstPrice + ((data.data.quantite - 1) * item.firstPrice);
          }
          item.quantite = data.data.quantite;
          
        } else {
          this.stock = data.data.quantite;
        }
      }
      document.querySelector('#'+id).classList.toggle('no-input-feet');
    })
    
    return await modal.present();
  }

  update() {

    let tmp = [];

    for (let formule of Object.keys(this.formuleContent)){
      if(this.formuleContent[formule].title != ''){
        tmp.push(this.formuleContent[formule]);
      }
    }

    this.formuleContent = tmp;

    if(this.empty(this.title) || this.empty(this.price) || this.empty(this.stock) || this.empty(this.firstPrice)){
      this.error = true;
    }

    else if(this.isAlreadySaved){
      this.modifyValueInFirebase(this.category);
      this.close();
    }
    else {
      this.addItemToFirebase(this.category);
      this.close();
    }
    
  }

  addItemToFirebase(db_name: string){
    if(this.category == 'formules'){
      this.afBD.list(db_name).push({
        name: this.title,
        price: this.price,
        firstPrice: this.firstPrice,
        formuleContent: this.formuleContent,
        disponible: true,
      });
    } else {
      this.afBD.list(db_name).push({
        name: this.title,
        price: this.price,
        firstPrice: this.firstPrice,
        stock: this.stock,
      });
    }
  }

  modifyValueInFirebase(db_name: string){

    this.afBD.object(db_name + '/' + this.item.key + '/name/')          .set(this.title);
    this.afBD.object(db_name + '/' + this.item.key + '/price/')         .set(this.price);
    this.afBD.object(db_name + '/' + this.item.key + '/firstPrice/')    .set(this.firstPrice);
    if(db_name == 'formules'){
      this.afBD.object(db_name + '/' + this.item.key + '/formuleContent').set(this.formuleContent);
    } else {
      this.afBD.object(db_name + '/' + this.item.key + '/stock/')        .set(this.stock);
    }
  }

  empty(obj): boolean {
    
    if(obj == undefined){
      return true;
    }
    return false;
  }

}
