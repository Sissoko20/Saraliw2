import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from 'src/environments/environment';

import { SwiperModule } from 'swiper/angular';


//// imports
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';




const firebase={
  projectId: 'factureapp-cd783',
  appId: '1:775906551956:web:8a3e9c3d3eef4ba2acec81',
  storageBucket: 'factureapp-cd783.appspot.com',
  apiKey: 'AIzaSyC9rY6koMkQnHR5V1KJ4GSYYGAq24HtDI0',
  authDomain: 'factureapp-cd783.firebaseapp.com',
  messagingSenderId: '775906551956',
  measurementId: 'G-0MD614PMCY',
}



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,//Database
    SwiperModule,
  ],
  providers: [
    File,
    FileOpener,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
