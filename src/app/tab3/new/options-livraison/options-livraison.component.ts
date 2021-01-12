import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-options-livraison',
  templateUrl: './options-livraison.component.html',
  styleUrls: ['./options-livraison.component.scss'],
})
export class OptionsLivraisonComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  lone() {
    this.close('lone');
  }

  share() {
    this.close('share');
  }

  close(type: string){
    this.popoverCtrl.dismiss({
      'type': type
    })
  }

}
