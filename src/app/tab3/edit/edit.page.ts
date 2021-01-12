import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';
import { NewComponent } from '../new/new.component';

import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  item: any = [];
  produits: any = [];
  details: string = '';

  private key: string;

  constructor(private navCtrl: NavController, private modalController: ModalController, private afDB: AngularFireDatabase, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.key = params['item'].key;
    });
  }

  ngOnInit() {
    this.getDeliveryFromFirebase();
    this.getProduitsFromFirebase();
  }

  goBack () {
    this.navCtrl.navigateBack('tabs/tab3');
  }

  getType(type: string): string {
    if(type == 'lone'){
      return 'Livraison seule';
    }
    return 'Livraison partagée';
  }

  async addNewExpModal() {
    const modal = await this.modalController.create({
      component: NewComponent,
      componentProps: {
        afDB: this.afDB,
        // KEY ITEM 
        key: this.key,
        // ATTRIBUTS
        delivery: this.item.order,
        title: this.item.title,
        price: this.item.price,
        date: this.item.date,
        km: this.item.distance,
        type: this.item.type,
        clientName: this.item.clientName
      },
      cssClass: 'my-custom-class'
    });

    return await modal.present();   
  }

  setQuantite(key: string, val: number){
    for(let p of Object.keys(this.produits)){
      if(this.produits[p].key == key){
        this.produits[p].content.stock = this.produits[p].content.stock + val;        
        this.afDB.object('produits/'+key+'/stock').set(this.produits[p].content.stock);
      }
    }
  }

  delete() {
    for(let admin of Object.keys(this.item.order)){
      for(let i of Object.keys(this.item.order[admin].items)){
        if(this.item.order[admin].items[i].formuleContent != undefined){
          if(this.item.order[admin].items[i].formuleContent.length != 0){
            for(let p of Object.keys(this.item.order[admin].items[i].formuleContent)){
              this.setQuantite(this.item.order[admin].items[i].formuleContent[p].key, this.item.order[admin].items[i].formuleContent[p].quantite);
            }
          }
        } else if(this.item.order[admin].items[i].key != '') {
          this.setQuantite(this.item.order[admin].items[i].key, this.item.order[admin].items[i].quantite);
        }
      }
    }
    this.afDB.list('Livraisons/').remove(this.key);
    this.goBack();
  }

  getDeliveryFromFirebase(){
    this.afDB.object('Livraisons/' + this.key).valueChanges().subscribe(item => {
      this.item = item;
    })
  }

  getProduitsFromFirebase(){
    this.afDB.list('produits').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.produits = [];
      this.details = '';
      actions.forEach(action => {
        this.produits.push({
          key: action.key,
          content: action.payload.exportVal(),
        })
      })
      for(let admin of Object.keys(this.item.order)){
        for(let i of Object.keys(this.item.order[admin].items)){
          if(this.item.order[admin] == this.item.order[0] &&  this.item.order[admin].items[i] == this.item.order[0].items[0]){
            this.details = this.item.order[admin].items[i].quantite + ' x ' + this.item.order[admin].items[i].title;
          } else {
            this.details = this.details + ', ' + this.item.order[admin].items[i].quantite + ' x ' + this.item.order[admin].items[i].title;
          }
        }
      }
    })
  }

}
