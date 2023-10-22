import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import SwiperCore, { SwiperOptions } from 'swiper';
import { ActionSheetController } from '@ionic/angular';

import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  presentingElement = undefined;


  dataUser={
    email:'',
    password:'',
    
  };
  email='';
  userId='';
  connected:boolean;

  Edmdata:Observable<any[]>;
  Somagepdata:Observable<any[]>;
  Isagodata:Observable<any[]>;
  Canaldata:Observable<any[]>;
  Malivisiondata:Observable<any[]>;

  dataFacture:any=[];
  dataFacturesomagep:any=[];
  dataFactureisago:any=[];
  dataFacturecanal:any=[];
  dataFacturemalivision:any=[];


  dataHistoriqueEDM=[

    {
    
      nom:"Electricité",
      icon:"../../assets/logo/edmlogo.jpg", 
      prix:2000,  
    },
  ]
  dataHistoriqueSOMAGEP=[
    {
      
      nom:"Eau",
   
      icon:"../../assets/logo/somagep-logo.png",   
    },
  ]
  dataHistoriqueMalivision=[

    {
      nom:"Mali Vision ",
      prix:"4000",
      icon:"../../assets/logo/malivisionlogo.png",   
    },
  ]
  dataHistoriqueIsago=[

    {
      nom:"Isago",
     
      icon:"../../assets/logo/ISAGO.jpg",   
    },
  ]
  dataHistoriqueCanal=[
    {
      
      nom:"Canal+",
      
      icon:"../../assets/logo/canallogo.png",   
    },
  ]


  dataElectricite=[
    {
      label:'Electricite',
      nom:'Facture EDM',
      icon:"../../assets/logo/edmlogo.jpg"
    },
    
  ]
  dataSomagep=[
    {
      nom:'SOMAGEP',
      label:'Eau',
      icon:"../../assets/logo/somagep-logo.png"

    }
    
  ]
  dataIsago=[
    {
      nom:'ISAGO',
     icon:"../../assets/logop.png"
    }
    
  ]
  dataCanal=[
    {
      nom:"Canal +",
       icon:"../../assets/logo/canalpost2.png"
      
    }
  ]
 
  dataMalivision=[
    {
      nom:'Malivision',
      icon:"../../assets/logo/tntsatpost1.jpg"
    },
    
  ]

  constructor(
    public fAuth:AngularFireAuth,
    public fDb:AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    public toast:ToastController,
    private localNotifications: LocalNotifications
  ) {

     //Verifions l'etat de connexion de user
     this.fAuth.authState.subscribe(auth=>{
      if (!auth) {
        console.log('user non connecté')
        this.connected=false;
      } else {
        
        
        console.log('user connecté'+auth.uid, );
        this.userId=auth.uid;
        this.email=auth.email;
        
        this.connected=true;
        this.getfactureEdm();
       this.getfactureSomagep();
       this.getfactureIsago();
       this.getfactureCanal();
       this.getfactureMalivision();

              
      }
    })
   }

   notif(){
    this.localNotifications.schedule({
      id: 1,
      text: "Votre paiement a été pris en compte, un message de confirmation vous sera envoyé" ,
      
    });
    console.log('Done');
    
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  getfactureEdm(){
    this.Edmdata=this.fDb.list(`users/factureEdm/${this.userId}/`,ref=>ref.limitToLast(1)).valueChanges();
            
  }
  getfactureSomagep(){
    this.Somagepdata=this.fDb.list(`users/factureSomagep/${this.userId}/`,ref=>ref.limitToLast(1)).valueChanges();        
  }
  
  getfactureIsago(){
    this.Isagodata=this.fDb.list(`users/factureIsago/${this.userId}/`,ref=>ref.limitToLast(1)).valueChanges();        
  }
  getfactureCanal(){
    this.Canaldata=this.fDb.list(`users/factureCanal/${this.userId}/`,ref=>ref.limitToLast(1)).valueChanges();        
  }
  getfactureMalivision(){
    this.Malivisiondata=this.fDb.list(`users/factureMalivision/${this.userId}/`,ref=>ref.limitToLast(1)).valueChanges();        
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };



  async AddPayementEdm(){
    console.log(this.dataFacture.nmo);
   await (this.dataFacture.nmo && this.dataFacture.ncompteur
      && this.dataFacture.montant) 
      {
        this.fDb.list(`users/factureEdm/${this.userId}/`).push({
          userId:this.userId,
            numerouser:this.dataFacture.nmo,
            ncompteuruser:this.dataFacture.ncompteur,
            montantpaye:this.dataFacture.montant,
            date:new Date().toISOString(),
        }).then( (res)=>{ 
          console.log(res);
          
          
         this.toast.create({
            duration: 3000,
            position:'top',
            icon:'alert',
            color:'success',
            message:'Payement effectuée avec succès',
            mode:'ios',
            
            
          }).then(res=>res.present());
          this.dataFacture={
            nmo:null,
            ncompteur:null,
            montant:null,
        }
        }
        
        ).catch(e=>{
          console.log(e);
          this.toast.create({
            duration: 3000,
            position:'top',
            icon:'alert',
            color:'danger',
            header:'Saisies incorrectes ou champ vide',
            message:'Rassurez vous que les champs sont remplis correctement puis de valider',

           
          }).then(res=>res.present());
          this.dataFacture={
            nmo:null,
            ncompteur:null,
            montant:null,
        }
        this.notif();
          
          
        })
      
     

      
    } 
   
  
  }

  async AddPayementSomagep(){
    console.log(this.dataFacturesomagep.nmo);
     await(this.dataFacturesomagep.nmo && this.dataFacturesomagep.ncompteur
       && this.dataFacturesomagep.montant)
       {
     this.fDb.list(`users/factureSomagep/${this.userId}/`).push({
      userId:this.userId,
        numerouser:this.dataFacturesomagep.nmo,
        ncompteuruser:this.dataFacturesomagep.ncompteur,
        montantpaye:this.dataFacturesomagep.montant,
        date:new Date().toISOString(),
     
    }).then( (res)=>{ 
      console.log(res);
      this.notif();
      
     this.toast.create({
        duration: 3000,
        position:'top',
        icon:'alert',
        color:'success',
        message:'Payement effectuée avec succès',
        mode:'ios'
        
      }).then(res=>res.present());
      this.dataFacturesomagep={
        nmo:null,
        ncompteur:null,
        montant:null,
    }
    }
    
    ).catch(e=>{
      console.log(e);
      this.toast.create({
        duration: 3000,
        position:'top',
        icon:'alert',
        color:'danger',
        header:'Saisies incorrectes ou champ vide',
        message:'Rassurez vous que les champs sont remplis correctement puis de valider',
       
      }).then(res=>res.present());
      this.dataFacturesomagep={
        nmo:null,
        ncompteur:null,
        montant:null,
    }
      
      
    })
  

  

  this.dataFacturesomagep={
    nmo:null,
    ncompteur:null,
    montant:null,
}
}


};

async AddPayementIsago(){
  console.log(this.dataFacture.nmo);
 await (this.dataFactureisago.nmo && this.dataFactureisago.ncompteur
  && this.dataFactureisago.montant)
 {
  this.fDb.list(`users/factureIsago/${this.userId}/`).push({
    userId:this.userId,
      numerouser:this.dataFactureisago.nmo,
      ncompteuruser:this.dataFactureisago.ncompteur,
      montantpaye:this.dataFactureisago.montant,
      date:new Date().toISOString(),
  }).then( (res)=>{ 
    console.log(res);
    this.notif();
   this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Payement effectuée avec succès',
      mode:'ios'
      
    }).then(res=>res.present());
    this.dataFactureisago={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
  }
  
  ).catch(e=>{
    console.log(e);
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'danger',
      header:'Saisies incorrectes ou champ vide',
      message:'Rassurez vous que les champs sont remplis correctement puis de valider',
     
    }).then(res=>res.present());
    this.dataFactureisago={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
    
    
  })






}
};

async AddPayementcanal(){
  console.log(this.dataFacturecanal.nmo);
  await (this.dataFacturecanal.nmo && this.dataFacturecanal.ndecodeur
    && this.dataFacturecanal.montant )
   {
 
  this.fDb.list(`users/factureCanal/${this.userId}/`).push({
    userId:this.userId,
      numerouser:this.dataFacturecanal.nmo,
      ndecodeur:this.dataFacturecanal.ndecodeur,
      montantpaye:this.dataFacturecanal.montant,
      
      
      date:new Date().toISOString(),
  }).then( (res)=>{ 
    console.log(res);
    this.notif();
   this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Payement effectuée avec succès',
      mode:'ios'
      
    }).then(res=>res.present());
    this.dataFacturecanal={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
  }
  
  ).catch(e=>{
    console.log(e);
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'danger',
      header:'Saisies incorrectes ou champ vide',
      message:'Rassurez vous que les champs sont remplis correctement puis de valider',
     
    }).then(res=>res.present());
    this.dataFacturecanal={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
    
    
  })

this.dataFacturecanal={
  nmo:null,
  ndecodeur:null,
  montant:null,
} 

}
};
async AddPayementmalivision(){
  console.log(this.dataFacturemalivision.nmo);
 
  await (this.dataFacturemalivision.nmo && this.dataFacturemalivision.ndecodeur
    && this.dataFacturemalivision.montant)
   {
  this.fDb.list(`users/factureMalivision/${this.userId}/`).push({
    userId:this.userId,
      numerouser:this.dataFacturemalivision.nmo,
      ndecodeur:this.dataFacturemalivision.ndecodeur,
      montantpaye:this.dataFacturemalivision.montant,
      date:new Date().toISOString(),
  }).then( (res)=>{ 
    console.log(res);
    this.notif();
   this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'success',
      message:'Payement effectuée avec succès',
      mode:'ios'
      
    }).then(res=>res.present());
    this.dataFacturecanal={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
  }
  
  ).catch(e=>{
    console.log(e);
    this.toast.create({
      duration: 3000,
      position:'top',
      icon:'alert',
      color:'danger',
      header:'Saisies incorrectes ou champ vide',
      message:'Rassurez vous que les champs sont remplis correctement puis de valider',
     
    }).then(res=>res.present());
    this.dataFacturecanal={
      nmo:null,
      ncompteur:null,
      montant:null,
  }
    
    
  })


this.dataFacturemalivision={
  nmo:null,
  ndecodeur:null,
  montant:null,
} 


};

}

}
