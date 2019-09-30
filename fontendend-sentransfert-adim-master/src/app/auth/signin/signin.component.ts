import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit() {}
  onLogin(data) {

    this.authService.login(data).subscribe(

      resp => {
          console.log(resp);
          console.log(resp.body.message2);
          Swal.fire({
            type: 'error',
            title: resp.body.message2,
          //  text: 'Something went wrong!',

          })

        let jwt = resp.body;
        this.authService.saveToken(jwt);
        if (this.isAdmin()) {


          this._router.navigate(["/dashboard"]);

          Swal.fire(
            'Bienvenu sur SeneTransfert',
            'Vous etes un superadmin',
            'success'
          )

        } else if (this.isUser()) {
          this._router.navigate(["/envoi"]);

          Swal.fire(
            'Bienvenu sur SeneTransfert',
            'Vous etes un User',
            'success'
          )

        } else if (this.isCaissier()) {
          this._router.navigate(["/depot"]);

          Swal.fire(
            'Bienvenu sur SeneTransfert',
            'Vous etes un Caissier',
            'success'
          )

        } else if (this.isAdminP)
        { this._router.navigate(["/addpartanduser"]);

        Swal.fire(
          'Bienvenu sur SeneTransfert',
          'Vous etes un Admin Partenaire',
          'success'
        )}



      },
      err => {


      }
    );
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }
  isAdminP() {
    return this.authService.isAdminP();
  }

  isCaissier() {
    return this.authService.isCaissier();
  }
}
