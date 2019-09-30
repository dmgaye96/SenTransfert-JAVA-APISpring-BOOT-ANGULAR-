import {Component, ViewChild, OnInit} from '@angular/core';
import { PartenaireService } from '../partenaires.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IPartenaire } from '../models/partenaire';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.scss']
})
export class ListepartenaireComponent implements OnInit {



  displayedColumns: string[] = ['id', 'raisonsociale', 'ninea', 'adresse' , 'statut' ];
  dataSource: MatTableDataSource<IPartenaire>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


 partenaire;
 etat;
 //dtoptions: DataTables.Settings={};

  constructor( private partenaireservice:PartenaireService){
  }

  ngOnInit(): void {


    this. partenaireservice.getPartenaires()
    .subscribe(
      res =>{

        this.partenaire = res,
        this.dataSource =new MatTableDataSource(this.partenaire);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },

      err =>{ console.log(err)}
    )
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //ngOnInit() {}

  blocker(id: number) {

    this.partenaireservice.blocker(id).subscribe(

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

