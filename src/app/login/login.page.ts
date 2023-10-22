import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ToastController } from '@ionic/angular';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  isModalOpen = false;
  dataUser={
    email:'',
    password:'',
  };
  resetpass='';
  userId = '';
  connected:boolean;
  resetemail='';


  constructor(
    public root:Router,
    public fAuth:AngularFireAuth,
    public toast:ToastController,
  ) {
    //Verifions l'etat de connexion de user
    this.fAuth.authState.subscribe(auth=>{
      if (!auth) {
        console.log('user non connecté')
        this.connected=false;
      } else {
        
        
        console.log('user connecté'+auth.uid, );
        this.userId=auth.uid;
        this.resetemail=auth.email;
        
        this.connected=true;
      

              
      }
    })
   }

 
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }




  ngOnInit() {
  }

  
   
 
  


login(){
  if(this.dataUser.email,this.dataUser.password){
  this.fAuth.signInWithEmailAndPassword(this.dataUser.email,this.dataUser.password)
  .then( (res)=>{ 
    console.log(res);
    this.root.navigateByUrl("/tabs/tab1");
    console.log('user connecté');
            this.dataUser={
              email:'',
              password:'',
            };
            
   this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Connexion reussie',
      mode:'ios'
      
    }).then(res=>res.present());
  }
  ).catch(e =>{
    console.log(e);
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'danger',
      header:'Email ou mot de passe incorrect',
      message:'Verifiez vos informations.puis connectez-vous et de réessayer ',
     
    }).then(res=>res.present());
    this.dataUser={
      email:'',
      password:'',
    }
  });
  

   }
  }
signup(){
  if(this.dataUser.email && this.dataUser.password){
    this.fAuth.createUserWithEmailAndPassword(this.dataUser.email,this.dataUser.password)
    .then( (res)=>{ 
      console.log(res);
      this.root.navigateByUrl("/tabs/tab1");
    console.log("Redirecto to page home");
      console.log('user inscrit avec succès');
              this.dataUser={
                email:'',
                password:'',
              } 
     this.toast.create({
        duration: 3000,
        position:'top',
        icon:'alert',
        color:'success',
        message:'Inscription effectuée avec succès',
        mode:'ios'
        
      }).then(res=>res.present());
    }
    ).catch(e =>{
      console.log(e);
      this.toast.create({
        duration: 3000,
        position:'top',
        icon:'alert',
        color:'danger',
        header:'Email ou mot de passe incorrect',
        message:'Verifiez vos informations.puis connectez-vous et de réessayer ',
       
      }).then(res=>res.present());
      this.dataUser={
        email:'',
        password:'',
      }
    })
   
  
          
  
  }
}
  resetpassword(){
    if(this.resetpass){
      this.fAuth.sendPasswordResetEmail(this.resetpass).
      then( (res)=>{ 
        console.log(res);
        console.log('user inscrit avec succès');
                this.dataUser={
                  email:'',
                  password:'',
                } 
       this.toast.create({
          duration: 3000,
          position:'top',
          icon:'alert',
          color:'success',
          message:"Lien de reinitialisation envoyée avec succès, merci de consulteer votre compte puis suivez les instructions à l'écran ",
          mode:'ios'
          
        }).then(res=>res.present());
      }
      ).catch(e =>{
        console.log(e);
        this.toast.create({
          duration: 3000,
          position:'top',
          icon:'alert',
          color:'danger',
          header:'Email ou mot de passe incorrect',
          message:'Verifiez vos informations.puis de réessayer svp',
         
        }).then(res=>res.present());
       
      })
    }
    this.resetpass='';
    console.log('Lien de reinitialisation envoyée');

    


    
     }


}
