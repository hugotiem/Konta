import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders: any;

  constructor(
    private navCtrl: NavController,
    private afDB: AngularFireDatabase,
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }

  getOrdersFromFirebase() {
    this.afDB.list('orders/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(orders => {
      this.orders = [];
      orders.forEach(order => {
        
      });
    });
  }
}
