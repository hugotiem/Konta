import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { QuantiteComponent } from './add/quantite/quantite.component';
import { OptionsComponent } from './add/options/options.component';
import { ProduitsListComponent } from './add/produits-list/produits-list.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, QuantiteComponent, OptionsComponent, ProduitsListComponent]
})
export class Tab2PageModule {}
