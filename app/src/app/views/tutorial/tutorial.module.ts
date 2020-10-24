import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';
import { TutorialPage } from './tutorial.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    IonicStorageModule
  ],
  declarations: [TutorialPage],
})
export class TutorialPageModule {}
