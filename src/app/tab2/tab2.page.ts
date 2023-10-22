import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase, } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
ids:number[]=[];
resume:boolean=false;

  dataHistoriqueEDM=[

    {
      nom:"Electricité",
      icon:"../../assets/logo/edmlogo.jpg", 
      
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


  userId = '';
  connected:boolean;
  useremail='';

  Edmdata:Observable<any[]>;
  dataFacture:any=[];
  dataFacturesomagep:any=[];
  dataFactureIsago:any=[];
  dataFacturecanal:any=[];
  dataFacturemalivision:any=[];

  searchTerm:string;

  
   
    Somagepdata:Observable<any[]>;
    Isagodata:Observable<any[]>;
    Canaldata:Observable<any[]>;
    Malivisiondata:Observable<any[]>;


    head2 = [['ID','DATE', 'N°COMPTEUR', 'MONTANT PAYE']]

    head = [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT']]


    

    

  constructor(
    public fAuth:AngularFireAuth,
    public fDb:AngularFireDatabase,
    
  )   {
    //Verifions l'etat de connexion de user
      this.fAuth.authState.subscribe(auth=>{
        if (!auth) {
          console.log('user non connecté')
          this.connected=false;
        } else {
          
          
          console.log('user connecté'+auth.uid, );
          this.userId=auth.uid;
          this.useremail=auth.email;
          
          this.connected=true;
          this.getfactureEdm();
          this.getfactureSomagep();
       this.getfactureIsago();
       this.getfactureCanal();
       this.getfactureMalivision();
       
                
        }
      })
  }

  getMessage(){
    this.fDb.list(`users/factureEdm/${this.userId}/`,ref=>ref.limitToLast(1)).snapshotChanges(['child_added'])
    .subscribe(actions=>{
      this.dataFacture=[];
      actions.forEach(action =>{
        console.log(' MessageText : ' +action.payload.exportVal().text);
        this.dataFacture.push({
          date:action.payload.exportVal().date,
          userId:action.payload.exportVal().userId,
          montantpaye:action.payload.exportVal().montantpaye,
          ncompteuruser:action.payload.exportVal().ncompteuruser,

        })
      }
      )}

    )
  }

  ngOnInit() {
    
    
  }



  //getters
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


 

  async getEdmPdf( ) {
    let dataTest = [
       [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
       [2, 'CRISTINAO','QA', 'TESTING'],
       [3, 'KROOS','MANAGER', 'MANAGEMENT'],
       [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
       [5, 'ABC','CONSULTANT', 'HR'],
       [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
     ]
 
     let dataAA = [];
     this.Edmdata.forEach((e, index: number = 0) => {
       console.log(e);
       dataAA.push([index,e[index]["date"],e[index]["montantpaye"],e[index]["ncompteuruser"]])
        index++
     })
    
     
    setTimeout(() => {
     const doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Reçu de paiement ', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head2,
       body:dataAA,
         theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // below line for Download PDF document  
     doc.save('myteamdetail.pdf');
   }, 1000)
   
     
   }

  async getSomagepPdf( ) {
    let dataTest = [
       [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
       [2, 'CRISTINAO','QA', 'TESTING'],
       [3, 'KROOS','MANAGER', 'MANAGEMENT'],
       [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
       [5, 'ABC','CONSULTANT', 'HR'],
       [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
     ]
 
     let dataAA = [];
     this.Somagepdata.forEach((e, index: number = 0) => {
       console.log(e);
       dataAA.push([index,e[index]["date"],e[index]["montantpaye"],e[index]["ncompteuruser"]])
        index++
     })
    
     
    setTimeout(() => {
     var doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Reçu de paiement ', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head2,
       body:dataAA,
         theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // below line for Download PDF document  
     doc.save('myteamdetail.pdf');
   }, 1000)
    return
     
   }
   async getIsagodataPdf() {
    
 
     let dataAA = [];
     this.Isagodata.forEach((e, index: number = 0) => {
       console.log(e);
       dataAA.push([index,e[index]["date"],e[index]["montantpaye"],e[index]["ncompteuruser"]])
        index++
     })
    
     
    setTimeout(() => {
     var doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Reçu de paiement ', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head2,
       body:dataAA,
         theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // below line for Download PDF document  
     doc.save('myteamdetail.pdf');
   }, 1000)
    return
     
   }
   async getCanaldataPdf( ) {
     
   
     
    let dataTest = [
       [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
       [2, 'CRISTINAO','QA', 'TESTING'],
       [3, 'KROOS','MANAGER', 'MANAGEMENT'],
       [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
       [5, 'ABC','CONSULTANT', 'HR'],
       [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
     ]
 

     let dataAA = [];
     this.Canaldata.forEach((e, index: number = 0) => {
       console.log(e);
       dataAA.push([index,e[index]["date"],e[index]["montantpaye"],e[index]["ncompteuruser"]])
        index++
     })
    
     
    setTimeout(() => {
     var doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Reçu de paiement ', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head2,
       body:dataAA,
         theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // below line for Download PDF document  
     doc.save('myteamdetail.pdf');
   }, 1000)
    return
     
   }
   async getMalivisionPdf() {
    let dataTest = [
       [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
       [2, 'CRISTINAO','QA', 'TESTING'],
       [3, 'KROOS','MANAGER', 'MANAGEMENT'],
       [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
       [5, 'ABC','CONSULTANT', 'HR'],
       [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
     ]
 
     let dataAA = [];
     this.Malivisiondata.forEach((e, index: number = 0) => {
       console.log(e);
       dataAA.push([index,e[index]["date"],e[index]["montantpaye"],e[index]["ncompteuruser"]])
        index++
     })
    
     
    setTimeout(() => {
     var doc = new jsPDF();
 
     doc.setFontSize(18);
     doc.text('Reçu de paiement ', 11, 8);
     doc.setFontSize(11);
     doc.setTextColor(100);
 
 
     (doc as any).autoTable({
       head: this.head2,
       body:dataAA,
         theme: 'plain',
       didDrawCell: data => {
         console.log(data.column.index)
       }
     })
 
     // below line for Open PDF document in new tab
     doc.output('dataurlnewwindow')
 
     // below line for Download PDF document  
     doc.save('myteamdetail.pdf');
   }, 1000)
    return
     
   }
  


}
