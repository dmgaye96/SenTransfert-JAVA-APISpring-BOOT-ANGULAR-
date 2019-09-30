import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  profils;
  register = {};
  imageUrl: string = "/assets/img/default.png ";
  fileToUpload: File = null;
  constructor(
    private registersService: RegisterService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registersService.getAllProfil().subscribe(res => {
      console.log(res);
      this.profils = res;
      if (this.authService.getRole() == "ROLE_SUPERADMIN") {
        this.profils = [this.profils[0], this.profils[1]];
      }
    });
  }

  handleFileInput(File: FileList) {
    this.fileToUpload = File.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  onsubmit(data: any) {
    console.log(data);
    console.log(this.fileToUpload);
    this.registersService.addregister(data, this.fileToUpload).subscribe(
      data => {
        console.log("done");
        Swal.fire({
          type: 'success',
          title: 'Enregistrement effectif',

        })
        this.router.navigate(["/listepartenaire"])

      },
      err => {

        Swal.fire({
          type: 'error',
          title: 'Echec de l enregistrement ',
        })

        console.log(err);

      }
    );
  }

  utilisateur = new FormGroup({
    login: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    telephone: new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern(/^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(
        /^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
      ),
      Validators.email
    ]),
    nom: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(
        /^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
      )
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(2),

    ]),

    Profile: new FormControl("", Validators.required)
  });

  errorMessage = {
    login: [
      { type: "required", message: "Champ username obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 5 lettres" }
    ],
    telephone: [
      { type: "required", message: "Champ telephone obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 9 lettres" },
      { type: "maxlength", message: "veuillez saisir au maximum 9 lettres" },
      {
        type: "pattern",
        message: "Ecrivez correctement le numero de telephone"
      }
    ],
    email: [
      { type: "required", message: "Champ est obligatoire " },
      { type: "minlength", message: "veuillez saisir au minimum 3 lettres" },
      { type: "email", message: "Ecrivez correctement le mail" }
    ],
    password: [
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
