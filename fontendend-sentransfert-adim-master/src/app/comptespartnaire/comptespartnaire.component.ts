import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CompteService } from '../services/compte.service';
import { ComptePart } from '../models/compte';

@Component({
  selector: 'app-comptespartnaire',
  templateUrl: './comptespartnaire.component.html',
  styleUrls: ['./comptespartnaire.component.scss']
})
export class ComptespartnaireComponent implements OnInit {



displayedColumns: string[] = ['id', 'numerocompte', 'solde'];
dataSource: MatTableDataSource<ComptePart>;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

infocompte;

  constructor( private user:CompteService) { }

  ngOnInit ():void {

    this.user.getcomptepartenaire().subscribe(

      resp=>{
          console.log(resp);

          this.infocompte = resp;
          this.dataSource =new MatTableDataSource(this.infocompte);
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


  }





