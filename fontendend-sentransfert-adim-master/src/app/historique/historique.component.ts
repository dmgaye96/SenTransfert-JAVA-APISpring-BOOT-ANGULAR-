/* import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  displayedColumns: string[] = ['id', 'raisonsociale', 'ninea', 'adresse' , 'statut' ];
  dataSource: MatTableDataSource<IPartenaire>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

historique;
  constructor( private historique:RegisterService ,private autentification:AuthService , private router:Router)  { }

  ngOnInit(): void {

    this. historique.get()
    .subscribe(
      res =>{

        this.historique = res,
        this.dataSource =new MatTableDataSource(this.historique);
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

  }


 */
