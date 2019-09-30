import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CompteService } from '../services/compte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aloueruncompte',
  templateUrl: './aloueruncompte.component.html',
  styleUrls: ['./aloueruncompte.component.scss']
})
export class AloueruncompteComponent implements OnInit {


  infouser={};
  compte;
  constructor( private comptes:RegisterService ,private autentification:AuthService , private router:Router , private comptepartenaire:CompteService) { }


  ngOnInit() {

    this.comptepartenaire.getcomptepartenaire().subscribe(

      res=>{
             console.log(res);
             this.compte=res

           }, err=>{
             console.log(err);

           }
         )
  }






  onsubmit(data:any){


    this.comptes.getinfouser(data).subscribe(

      resp=>{
          console.log(resp);

         this.infouser = resp;
          console.log(this.infouser);

        }, err=>{
             console.log(err);



           }
         )

   }


   onsubmit1 (data:any){
    console.log(data);

     this.comptes.allouer(data)
     .subscribe(
       data=>{
         console.log('done');
         Swal.fire({
          type: 'success',
          title:'Operation  effectif',

        })

       }, err=>{
        console.log(err);

       }
     )
   }


}
