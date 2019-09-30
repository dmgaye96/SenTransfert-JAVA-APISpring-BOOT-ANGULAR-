import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TransactionService } from '../services/transaction.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.scss']
})
export class EnvoiComponent implements OnInit {

  constructor( private authService: AuthService,
    private router: Router , private trans:TransactionService) {

  }

  ngOnInit() {
  }

  onsubmit(data: any) {
    console.log(data);

    this.trans.Envoi(data).subscribe(
      data => {
        console.log("done");

        Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        })
      },
      err => {
        console.log(err);
        Swal.fire({
          type: 'error',
          title: 'Echec de l enregistrement ',
        })
      }
    );
  }

  envoi = new FormGroup({
    nomE: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    prenomE: new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)
    ]),
    telephoneE: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(
        /^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
      ),

    ]),
    Numeropiece: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(
        /^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
      )
    ]),
    nomB: new FormControl("", [
      Validators.required,
      Validators.minLength(2),

    ]),

    prenomB: new FormControl("", [
      Validators.required,
      Validators.minLength(2),

    ]),

    montant: new FormControl("", [
      Validators.required,
      Validators.minLength(2),

    ]),

    telephoneB: new FormControl("", Validators.required)
  });

  errorMessage = {
    nomE: [
      { type: "required", message: "Champ username obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 5 lettres" }
    ],
    prenomE: [
      { type: "required", message: "Champ prenomE obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 9 lettres" },
      { type: "maxlength", message: "veuillez saisir au maximum 9 lettres" },
      {
        type: "pattern",
        message: "Ecrivez correctement le numero de prenomE"
      }
    ],
    telephoneE: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 3 lettres" },
      { type: "telephoneE", message: "Ecrivez correctement le mail" }
    ],
    Numeropiece: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 3 lettres" },
      { type: "pattern", message: "Ecrivez correctement le password" }
    ],
    nom: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 2 lettres" },
      { type: "pattern", message: "Ecrivez correctement le nom" }
    ],
    Profile: [{ type: "required", message: "Selectionner un Role svp !  " }]
  };


}
