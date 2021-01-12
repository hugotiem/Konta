import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.scss'],
})
export class QuantiteComponent implements OnInit {

  @Input() quantite: number;
  disabled: boolean = false;
  stop: boolean = false;

  constructor(private modalCtrl: ModalController) { 
  }

  ngOnInit() {
    if(this.quantite == 1) {
      this.disabled = true;
    } 
  }

  close(bool: boolean) {
    if(bool){
      this.modalCtrl.dismiss({
        'quantite': this.quantite
      })
    } else {
      this.modalCtrl.dismiss();
    }
  }

  add () {
    this.quantite ++;
    this.disabled = false;
  }

  remove () {
    if(this.quantite > 1) {
      this.quantite --;
      if(this.quantite == 1) {
        this.disabled = true;
      }
    } 
    this.stop = false;
  }

}
