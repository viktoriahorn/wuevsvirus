import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';
import { TopBarComponent } from 'src/app/elements/top-bar/top-bar.component';
import { RowButtonComponent } from 'src/app/elements/row-button/row-button.component';
import { EventItemComponent } from 'src/app/elements/event-item/event-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page, TopBarComponent, RowButtonComponent, EventItemComponent]
})
export class Tab3PageModule {}
