// ANGULAR
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

// IONIC
import { ModalController, NavController } from '@ionic/angular';

// OWN COMPONENT
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  key: string;
  cat: string;

  item: any = [];

  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private modalCtrl: ModalController,
    private afDB: AngularFireDatabase, 
  ) {
    this.route.queryParams.subscribe(params => {
      this.key = params['key'];
      this.cat = params['cat'];
    });
   }

  ngOnInit() {
    this.getItemFromFirebase();
  }

  goBack() {
    this.navCtrl.back();
  }

  async openEdit() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      componentProps: {
        item: this.item,
        category: this.cat,
      },
      swipeToClose: true,
    })

    return await modal.present();
  }

  getItemFromFirebase(){
    this.afDB.object(this.cat + '/' + this.key + '/').snapshotChanges().subscribe(action => {
      let item = action.payload.exportVal();
      if(this.cat == 'formules'){
        this.item = {
          key: action.key,
          name: item.name,
          price: item.price,
          firstPrice: item.firstPrice,
          formuleContent: item.formuleContent,
          disponible: item.disponible
        };
      } else {
        this.item = {
          key: action.key,
          name: item.name,
          price: item.price,
          firstPrice: item.firstPrice,
          stock: item.stock,
        };
      }
    });
  }

}
