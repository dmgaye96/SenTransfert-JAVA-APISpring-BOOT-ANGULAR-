import { Component, OnInit, ViewChild } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Users } from '../models/users';
import Swal from 'sweetalert2';
import { PartenaireService } from '../partenaires.service';

@Component({
  selector: 'app-userpartenaire',
  templateUrl: './userpartenaire.component.html',
  styleUrls: ['./userpartenaire.component.scss']
})
export class UserpartenaireComponent implements OnInit {



displayedColumns: string[] = ['id', 'nom', 'roles' , 'telephone' ,'email', 'statut'];
dataSource: MatTableDataSource<Users>;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

infouser;
etat;
  constructor( private user:CompteService , private partenaireservice:PartenaireService) { }

  ngOnInit ():void {

    this.user.getUser().subscribe(

      resp=>{
          console.log(resp);

          this.infouser = resp;
          this.dataSource =new MatTableDataSource(this.infouser);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }, err=>{console.log(err); }
         )

      }


  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }






  blocker(id: number) {

    this.partenaireservice.blocker1(id).subscribe(

    resp=>{

      this.etat = resp,
      this.ngOnInit();
      Swal.fire({
        type: 'success',
        title: 'effectif',

      })

      }, err=>{
        console.log(err);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })

        Toast.fire({
          type: 'success',
          title: 'Operation effectif'
        })

        this.ngOnInit();
      }
    )

  }



  }




