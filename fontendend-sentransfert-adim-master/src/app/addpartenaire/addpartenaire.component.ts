import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaires.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpartenaire',
  templateUrl: './addpartenaire.component.html',
  styleUrls: ['./addpartenaire.component.scss']
})
export class AddpartenaireComponent implements OnInit {

    Partenaire = {} ;
    imageUrl: string="/assets/img/default.png ";
    fileToUpload: File=null;
      constructor(private partenairesService :PartenaireService , private authService :AuthService ,private router: Router) { }

      ngOnInit() {
      }



      handleFileInput(File : FileList){
        this.fileToUpload=File.item(0);
       var reader= new FileReader();
       reader.onload=(event:any)=>{
         this.imageUrl=event.target.result;

       }
       reader.readAsDataURL(this.fileToUpload);
      }

      onsubmit (data:any){
       console.log(data);
       console.log(this.fileToUpload);
        this.partenairesService.addPartenaire(data, this.fileToUpload)
        .subscribe(
          data=>{
            console.log('done');

            Swal.fire({
              type: 'success',
              title: 'Enregistrement effectif',

            })


          }, err=>{
            Swal.fire({
              type: 'success',
              title: 'Enregistrement effectif',
            })
           console.log(err);
          }
        )
      }

    }
