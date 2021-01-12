import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

// COMPONENTS FROM IONIC
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { NavController } from '@ionic/angular';

// OWN COMPONENTS
import { PopoverComponent } from './popover/popover.component';
import { AddComponent } from './add/add.component';

// CLASS FROM PROJECT


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public produits: any = [];
  public formules: any = [];
  public extras: any = [];

  produitSpinner: boolean = true; 
  formuleSpinner: boolean = true; 
  extraSpinner: boolean = true; 

  constructor(
    private routerOutlet: IonRouterOutlet,
    public afDB: AngularFireDatabase, 
    private popoverController: PopoverController, 
    private modalController: ModalController,
    private navCtrl: NavController) {

    this.getProduitsFromFirebase();
    this.getFormulesFromFirebase();
    this.getExtrasFromFirebase();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        
      },
      cssClass: 'sort-popover',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  /**
   * Dirige l'utlisateur vers la page d'etail du produit
   * @param key la cle du produit dont on veut afficher les details
   * @param cat la categorie du produit pour la BDD
   */
  async goToEdit(key: string, cat: string) {
    let navData: NavigationExtras = {
      queryParams: {
        key: key,
        cat: cat,
      }
    }
    this.navCtrl.navigateForward('tabs/tab2/edit', navData);
  }

  /**
   * Ouvre le modal permettant d'ajouter un item
   */
  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddComponent,
      cssClass: '', 
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await  modal.present();
  }

  /**
   * Recupere tous les produits de la BDD
   */
  getProduitsFromFirebase(){ 
    this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.produits = [];
      this.produitSpinner = false; 
      actions.forEach(action => {
        let produit = action.payload.exportVal();
        this.produits.push({
          key: action.key,
          name: produit.name,
          price: produit.price,
          firstPrice: produit.firstPrice,
          stock: produit.stock,
        });
      });
    });
  }

  /**
   * Recupere toutes les formules de la BDD
   */
  getFormulesFromFirebase(){
    this.afDB.list('formules/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.formules = [];
      this.formuleSpinner = false;
      actions.forEach(action => {
        let formule = action.payload.exportVal();
        this.formules.push({
          key: action.key,
          name: formule.name,
          price: formule.price,
          firstPrice: formule.firstPrice,
          formuleContent: formule.formuleContent,
          disponible: formule.disponible
        });
      });
    });
  }

  /**
   * Recupere tous les extras de la BDD
   */
  getExtrasFromFirebase(){
    this.afDB.list('extras/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
      this.extras = [];
      this.extraSpinner = false; 
      actions.forEach(action => {
        let extra = action.payload.exportVal();
        this.extras.push({
          key: action.key,
          name: extra.name,
          price: extra.price,
          firstPrice: extra.firstPrice,
          stock: extra.stock,
        });
      });
    });
  }

  /**
   * Supprime un item de la BDD
   * @param item l'item a supprimer
   */
  delete(item: any) {
    this.afDB.list('produits/').remove(item.key);
  }

}
