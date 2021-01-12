import { Component, OnInit } from '@angular/core';
import { PopoverController }  from '@ionic/angular';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss'],
})
export class NamesComponent implements OnInit {

  names: any = ['Alexis', 'Hugo', 'Marvyn', 'Gud', 'Taheir'];

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  dissmis(name: string): void {
    this.popoverCtrl.dismiss({
      'fromPopover': name
    });
  }

}
