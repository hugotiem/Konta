import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewComponent } from './new/new.component';
import { NamesComponent } from './new/names/names.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ItemsComponent } from './new/items/items.component';
import { OptionsLivraisonComponent } from './new/options-livraison/options-livraison.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, NewComponent, NamesComponent, ItemsComponent, OptionsLivraisonComponent],
  exports: [Tab3Page]
})
export class Tab3PageModule {}
