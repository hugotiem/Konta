import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input() afDB: AngularFireDatabase;

  produits: any = [];
  formules: any = [];
  extras: any = [];

  constructor(private modalctrl: ModalController) {
        
  }

  ngOnInit() {
    this.getProduitsFromFirebase();
    this.getFormulesFromFirebase();
    this.getExtrasFromFirebase();
  }

  close(item: any) {

    setTimeout (() => {
      if(item !== null) {
        this.modalctrl.dismiss({ 
          'item': item,
        })
      } else {
        this.modalctrl.dismiss();
      }
      
    }, 200);
  }

  getProduitsFromFirebase() {
    this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.produits = [];
      actions.forEach(action => {
        let produit = action.payload.exportVal();
        this.produits.push({
          title: produit.name,
          price: produit.price,
          firstPrice: produit.firstPrice,
          quantite: produit.stock,
          key: action.key,
        });
      });
    });
  }

  getFormulesFromFirebase(){
    this.afDB.list('formules/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.formules = [];
      actions.forEach(action => {
        let formule = action.payload.exportVal();
        this.formules.push({
          title: formule.name,
          price: formule.price,
          firstPrice: formule.firstPrice,
          formuleContent: formule.formuleContent,
          disponible: formule.disponible,
          key: action.key,
        });
      });
    });
  }

  getExtrasFromFirebase(){
    this.afDB.list('extras/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.extras = [];
      actions.forEach(action => {
        let extra = action.payload.exportVal();
        this.extras.push({
          title: extra.name,
          price: extra.price,
          firstPrice: extra.firstPrice,
          quantite: extra.stock,
          key: action.key,
        });
      });
    });
  }

}
