import { Component, Input, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.scss'],
})
export class ProduitsListComponent implements OnInit {

  @Input() formule:  any;
  items: any = [];
  extras: any = [];

  private new: boolean = true;
  private last: boolean = false;

  constructor(private popoverCtrl: PopoverController, private afDB: AngularFireDatabase) { 
    this.getItemsFromFireBase();
    this.getExtrasFromFirebase();
  }

  ngOnInit() {

    if(this.formule == undefined){
      this.formule = [];
    }
  }

  async close(item :any){
    this.popoverCtrl.dismiss({
      'formule': item.title,
      'formuleFirstPrice': item.firstPrice,
      'quantite': item.quantite,
      'key': item.key,
      'last': this.last,
    })
  }

  saveItemsInFormule(ev: any, item: any) {
    this.close(item);
  }

  getItemsFromFireBase(){
    this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.items = [];
      actions.forEach(action => {
        let item = action.payload.exportVal();
        this.items.push({
          key: action.key,
          title: item.name,
          firstPrice: item.firstPrice,
          quantite: item.stock,
          alreadyUsed: false
        });
      });

      let cpt = 0;
      
      for(let i of Object.keys(this.items)){
        for(let f of Object.keys(this.formule)){
          if(this.formule[f].title == this.items[i].title){
            this.items[i].alreadyUsed = true;
            cpt ++;
          }
        }
      }

      if(cpt + 1 == this.items.length){
        this.last = true;
      }

    });
  }

  getExtrasFromFirebase(){
    this.afDB.list('extras/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.extras = [];
      actions.forEach(action => {
        let extra = action.payload.exportVal();
        this.extras.push({
          key: action.key,
          title: extra.name,
          firstPrice: extra.firstPrice,
          quantite: extra.stock,
          alreadyUsed: false,
        });
      });

      let cpt = 0;
      
      for(let i of Object.keys(this.items)){
        for(let f of Object.keys(this.formule)){
          if(this.formule[f].title == this.items[i].title){
            this.items[i].alreadyUsed = true;
            cpt ++;
          }
        }
      }

      if(cpt + 1 == this.items.length){
        this.last = true;
      }
    });
  }

}
