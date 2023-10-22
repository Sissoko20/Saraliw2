import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { SwiperModule } from 'swiper/angular';
import SwiperCore from 'swiper';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [Tab1Page],
  providers:[LocalNotifications],
})
export class Tab1PageModule {}
