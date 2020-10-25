import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CardComponent } from 'src/app/elements/card/card.component';
import { TopBarComponent } from 'src/app/elements/top-bar/top-bar.component';
import { RowButtonComponent } from 'src/app/elements/row-button/row-button.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, CardComponent, TopBarComponent, RowButtonComponent]
})
export class Tab1PageModule {}
