import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  connected:boolean;
  isModalOpen = false;
  constructor(
    private toast:ToastController,
    private fAuth:AngularFireAuth
  ) {
    //Verifions l'etat de connexion de user
      this.fAuth.authState.subscribe(auth=>{
        if (!auth) {
          console.log('user non connecté')
          this.connected=false;
        } else {
          
          
          console.log('user connecté'+auth.uid, );
          
          
          this.connected=true;
         
                
        }
      })
  }

  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  async darkactive(event){
    if (event.detail.checked) {
      document.body.setAttribute('color-theme',"dark")
      
    }else {
      document.body.setAttribute('color-theme',"light")
    }
  }
  logout(){
    this.fAuth.signOut()
    console.log('user deconnecté')
    this.connected=false;
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Vous etes deconnecté',
      mode:'ios'
      
    }).then(res=>res.present());
  
  }
}
