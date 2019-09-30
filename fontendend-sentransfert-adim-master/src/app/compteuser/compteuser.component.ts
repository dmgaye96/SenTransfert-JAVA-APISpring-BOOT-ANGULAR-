import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComptePart } from '../models/compte';
import { CompteService } from '../services/compte.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-compteuser',
  templateUrl: './compteuser.component.html',
  styleUrls: ['./compteuser.component.scss']
})
export class CompteuserComponent implements OnInit {


  infocompte;

    constructor( private user:CompteService , private route:Router) { }


    ngOnInit ():void {

      this.user.getcompteuser().subscribe(

        resp=>{
            console.log(resp);
            this.infocompte = resp;
            Swal.fire({
              type: 'success',
              title: 'Infomation du Compte',
              html:

    '<button id="stop" class="btn btn-danger">'+'Numero de Compte:  ' +
    this.infocompte.numerocompte +
    '</button><br/> <br>' +
    '<button id="resume" class="btn btn-success" disabled>'+'Solde du Compte:  ' +
    this.infocompte.solde +
    '  FCFA</button><br/>'

            })
            this.route.navigate(["/envoi"]);


          }, err=>{console.log(err); }
           )

        }


}
