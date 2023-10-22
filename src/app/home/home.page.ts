import { Component } from '@angular/core';
import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';


import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //var

  connected:boolean;
  resetemail='';
  userId = '';
   dataUser={
    email:'',
    password:'',
  };

  constructor(
    public fAuth:AngularFireAuth,
    public fDb:AngularFireDatabase,
    public toast:ToastController,
     public nav:Router,
  ) { 

     //Verifions l'etat de connexion de user
     this.fAuth.authState.subscribe(auth=>{
      if (!auth) {
        console.log('user non connecté')
        this.connected=false;
      } else {
        
        
        console.log('user connecté'+auth.uid);
        this.userId=auth.uid;
        this.resetemail=auth.email;
        
        this.connected=true;
      

              
      }
    })
    
  }

  
  logout(){
    this.fAuth.signOut()
    console.log('user deconnecté');
    this.connected=false;
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Vous etes deconnecté',
      mode:'ios'
      
    }).then(res=>res.present());
    this.dataUser={
      email:'',
      password:'',
    } 
  
  }

  login(){
    this.fAuth.signInWithEmailAndPassword(this.dataUser.email,this.dataUser.password)
    .then( (res)=>{ 
      console.log(res);
      console.log('user connecté');
              this.dataUser={
                email:'',
                password:'',
              } 
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
    })
   
      
     }
  }
