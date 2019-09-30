import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {

infocode={};
retrait;

  constructor( private code:TransactionService) { }

  ngOnInit() {
  }


  onsubmit(data:any){


    this.code.getCode(data).subscribe(

      resp=>{

          console.log(resp);


         this.infocode = resp;
          console.log(this.infocode);


   }, err=>{
             console.log(err);

        Swal.fire({
          type: 'error',
          title: 'Le code est invalide ou deja retirer',
        })
           }
         )
   }



   onsubmit1 (data:any){
    console.log(data);

     this.code.Retrait(data)
     .subscribe(
       data=>{
         console.log('done');
         Swal.fire({
          type: 'success',
          title: 'Retrait effectif',

        })


       }, err=>{

        Swal.fire({
          type: 'error',
          title: 'Echec de Retrait effectif',
        })
        console.log(err);
       }
     )
   }



   retraitf = new FormGroup({
    code: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    numeropiece: new FormControl("", [
      Validators.required,


    ]),
    typedepiece: new FormControl("", [
      Validators.required,
      Validators.minLength(3)]) });

  errorMessage = {

    code: [
      { type: "required", message: "Champ username obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 5 lettres" }
    ],
    numeropiece: [
      { type: "required", message: "Champ numeropiece est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 9 lettres" },

      {
        type: "pattern",
        message: "Ecrivez correctement le numero de numeropiece"
      }
    ],
    typedepiece: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 3 lettres" },
      { type: "telephoneE", message: "Ecrivez correctement le mail" }
    ]
  };




}
