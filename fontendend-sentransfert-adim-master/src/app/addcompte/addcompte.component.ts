import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.scss']
})
export class AddcompteComponent implements OnInit {
  partenaires;
  compte ={};
  constructor( private comptes:RegisterService ,private autentification:AuthService) { }

  ngOnInit() {
 this.comptes.getAllcompte().subscribe(

 res=>{
        console.log(res);
        this.partenaires=res
/*
        Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        }) */

      }, err=>{
        console.log(err);

      /*   Swal.fire({
          type: 'error',
          title: 'Echec de l enregistrement ',
        }) */
      }
    )
   }




   onsubmit (data:any){
    console.log(data);

     this.comptes.addCompt(data)
     .subscribe(
       data=>{
         console.log('done');
         Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        })

       }, err=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })

        Toast.fire({
          type: 'success',
          title: 'Enregistrement effectif'
        })
        console.log(err);
       }
     )
   }

}
