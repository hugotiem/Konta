import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public items: any = [
    {
      name: 'Catégorie',
      value: 'category'
    },
    {
      name: 'Quantité',
      value: 'asc-stock'
    },
    {
      name: 'Quantité',
      value: 'desc-stock'
    },
    {
      name: 'A - Z',
      value: 'asc'
    },
    {
      name: 'Prix',
      value: 'price'
    }
  ]

  constructor() {
    
   }

  ngOnInit() {}

}
